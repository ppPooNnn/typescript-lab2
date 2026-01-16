import { useMemo, useState } from "react";
import type { Calculation } from "../types/calculator";

interface FormProps {
  onSubmit?: (output: Calculation) => void;
}

export const Form = ({ onSubmit }: FormProps) => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operation, setOperation] = useState("+");
  const result = useMemo(() => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
    switch (operation) {
      case "+":
        return number1 + number2;
      case "-":
        return number1 - number2;
      case "*":
        return number1 * number2;
      case "/":
        // return number2 != 0 ? number1 / number2 : "cannot divide by zero"
        return number1 / number2;
      default:
        return 0;
    }
  }, [num1, num2, operation]);
  return (
    <div>
      <input
        type="text"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <select value={operation} onChange={(e) => setOperation(e.target.value)}>
        <option>+</option>
        <option>-</option>
        <option>*</option>
        <option>/</option>
      </select>
      <input
        type="text"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <button
        onClick={() => {
          onSubmit?.({
            uuid: crypto.randomUUID(),
            num1: parseFloat(num1),
            num2: parseFloat(num2),
            operator : operation,
            result,
          });
        }}
      >
        submit
      </button>
      <p>
        {num1} {operation} {num2} = {result}
      </p>
    </div>
  );
};
