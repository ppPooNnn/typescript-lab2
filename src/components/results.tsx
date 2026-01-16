import type { Calculation } from "../types/calculator";

interface ResultsProps {
  results: Calculation[];
  onRemove: (uuid: string) => void
}

export const Results = ({results, onRemove}: ResultsProps) => {
  return (
    <ul>
      {results.map((v) => (
        <li key = {v.uuid}> {v.num1} {v.operator} {v.num2} = {v.result}
        <button onClick={() => onRemove(v.uuid)}>🗑️</button>
        </li>
      ))}
    </ul>
  );
};
