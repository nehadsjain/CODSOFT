import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(40px);
  -webkit-backdrop-filter: blur(40px);
  border-radius: 32px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.2);
  padding: 32px;
  width: 360px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Display = styled.div`
  background: rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  min-height: 130px;
  box-shadow: inset 0 2px 10px rgba(0, 0, 0, 0.2);
  word-wrap: break-word;
  word-break: break-all;
  border: 1px solid rgba(255, 255, 255, 0.05);
`;

const PreviousInput = styled.div`
  color: rgba(255, 255, 255, 0.5);
  font-size: 1.25rem;
  font-weight: 500;
  min-height: 28px;
  letter-spacing: 1px;
`;

const CurrentInput = styled.div`
  color: #ffffff;
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -1px;
`;

const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
`;

const Button = styled.button`
  border: none;
  outline: none;
  height: 64px;
  border-radius: 16px;
  font-size: 1.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  color: #fff;
  background: ${props => 
    props.$primary ? 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)' : 
    props.$operator ? 'rgba(255, 255, 255, 0.15)' : 
    'rgba(255, 255, 255, 0.05)'};
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1), inset 0 1px 1px rgba(255,255,255,0.1);

  /* Spanning calculation */
  grid-column: ${props => props.$span ? `span ${props.$span}` : 'span 1'};

  &:hover {
    transform: translateY(-2px);
    background: ${props => 
      props.$primary ? 'linear-gradient(135deg, #b865f7 0%, #fc58a9 100%)' : 
      props.$operator ? 'rgba(255, 255, 255, 0.25)' : 
      'rgba(255, 255, 255, 0.12)'};
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }
`;

function Calculator() {
  const [currentValue, setCurrentValue] = useState('');
  const [previousValue, setPreviousValue] = useState('');
  const [operator, setOperator] = useState(null);

  const handleNumber = (number) => {
    if (number === '.' && currentValue.includes('.')) return;
    if (currentValue === '0' && number !== '.') {
      setCurrentValue(number);
      return;
    }
    if (currentValue.length >= 10) return; // Prevent overflowing display length
    setCurrentValue(currentValue + number);
  };

  const handleOperator = (op) => {
    if (currentValue === '' && previousValue === '') return;
    
    if (currentValue !== '' && previousValue !== '' && operator) {
      const result = compute();
      setPreviousValue(result);
      setCurrentValue('');
      setOperator(op);
      return;
    }

    if (currentValue === '') {
      setOperator(op);
      return;
    }

    setPreviousValue(currentValue);
    setOperator(op);
    setCurrentValue('');
  };

  const compute = () => {
    const prev = parseFloat(previousValue);
    const current = parseFloat(currentValue);
    if (isNaN(prev) || isNaN(current)) return '';

    let result;
    switch (operator) {
      case '+':
        result = prev + current;
        break;
      case '-':
        result = prev - current;
        break;
      case '*':
        result = prev * current;
        break;
      case '/':
        result = current === 0 ? 'Error' : prev / current;
        break;
      default:
        return '';
    }
    
    if (result !== 'Error') {
      result = Math.round(result * 100000000) / 100000000;
    }
    return result.toString();
  };

  const handleEqual = () => {
    if (operator && currentValue !== '' && previousValue !== '') {
      setCurrentValue(compute());
      setPreviousValue('');
      setOperator(null);
    }
  };

  const handleClear = () => {
    setCurrentValue('');
    setPreviousValue('');
    setOperator(null);
  };

  const handleDelete = () => {
    setCurrentValue(currentValue.toString().slice(0, -1));
  };

  return (
    <Container>
      <Display>
        <PreviousInput>
          {previousValue} {operator}
        </PreviousInput>
        <CurrentInput>{currentValue || '0'}</CurrentInput>
      </Display>
      
      <ButtonGrid>
        <Button onClick={handleClear} $span={2} $operator>AC</Button>
        <Button onClick={handleDelete} $operator>DEL</Button>
        <Button onClick={() => handleOperator('/')} $operator>÷</Button>
        
        <Button onClick={() => handleNumber('7')}>7</Button>
        <Button onClick={() => handleNumber('8')}>8</Button>
        <Button onClick={() => handleNumber('9')}>9</Button>
        <Button onClick={() => handleOperator('*')} $operator>×</Button>
        
        <Button onClick={() => handleNumber('4')}>4</Button>
        <Button onClick={() => handleNumber('5')}>5</Button>
        <Button onClick={() => handleNumber('6')}>6</Button>
        <Button onClick={() => handleOperator('-')} $operator>−</Button>
        
        <Button onClick={() => handleNumber('1')}>1</Button>
        <Button onClick={() => handleNumber('2')}>2</Button>
        <Button onClick={() => handleNumber('3')}>3</Button>
        <Button onClick={() => handleOperator('+')} $operator>+</Button>
        
        <Button onClick={() => handleNumber('0')} $span={2}>0</Button>
        <Button onClick={() => handleNumber('.')}>.</Button>
        <Button onClick={handleEqual} $primary>=</Button>
      </ButtonGrid>
    </Container>
  );
}

export default Calculator;
