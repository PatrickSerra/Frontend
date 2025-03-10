import Button from "./Button";
import "./Calculator.css";
import Display from "./Display";
import ButtonGrid from "./ButtonGrid";
import { useState } from "react";

function Calculator() {
  const [displayValue, setDisplayValue] = useState('0');
  const [clearDisplay, setclearDisplay] = useState(null);
  const [previousValue, setPreviousValue] = useState(null)
   

  const addDigit = (digit) => {
      if(digit == '0' && displayValue == '0') return
      setPreviousValue(displayValue + digit)
      setDisplayValue(previousValue)
     
      
  }

  const addOperation = (digit) => {
    
  }

  const clearMemory = (digit) => {
    
  }

  const calculate = (digit) => {
    
  }

  return (
    <div className="calculator">
      <Display value={displayValue} />
      <ButtonGrid>
        <Button label={"C"} click={clearMemory} classes="btn--danger" />
        <Button label={"("} click={addDigit} />
        <Button label={")"} click={addDigit} />
        <Button label={"mod"} click={addOperation} />
        <Button label={"π"} click={addOperation} />
        <Button label={"7"} click={addDigit} />
        <Button label={"8"} click={addDigit} />
        <Button label={"9"} click={addDigit} />
        <Button label={"÷"} click={addOperation} />
        <Button label={"√"} click={addOperation} />
        <Button label={"4"} click={addDigit} />
        <Button label={"5"} click={addDigit} />
        <Button label={"6"} click={addDigit} />
        <Button label={"X"} click={addOperation} />
        <Button label={"x\u00B2"} click={addOperation} />
        <Button label={"1"} click={addDigit} />
        <Button label={"2"} click={addDigit} />
        <Button label={"3"} click={addDigit} />
        <Button label={"-"} click={addOperation} />
        <Button
          label={"="}
          click={calculate}
          classes="btn--secondary span-y-2"
        />
        <Button label={"0"} click={addDigit} />
        <Button label={","} click={addDigit} />
        <Button label={"%"} click={addOperation} />
        <Button label={"+"} click={addOperation} />
      </ButtonGrid>
    </div>
  );
}

export default Calculator;
