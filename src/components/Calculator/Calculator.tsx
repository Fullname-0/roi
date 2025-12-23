import { InputPanel } from './InputPanel';
import { ResultsPanel } from './ResultsPanel';
import { AssumptionsPanel } from './AssumptionsPanel';
import './Calculator.css';

export const Calculator = () => {
  return (
    <section className='calculator-section'>
      <div className='calculator-header'>
        <h2>Calculate Your Savings with Align</h2>
      </div>

      <div className='calculator-layout'>
        <InputPanel />
        <ResultsPanel />
        <AssumptionsPanel />
      </div>
    </section>
  );
};
