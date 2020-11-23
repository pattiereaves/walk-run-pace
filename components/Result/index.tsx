import * as React from 'react';
import { convert as paceConverter } from 'pace-converter';
import { Calculations } from '../../pages';

export type Props = {
  calculations?: Calculations;
}

export default function Result({
  calculations
}: Props) {
  return calculations ? (
    <div className="result">
      <h2>
        Results
      </h2>
      <p>
        To achieve this time goal,
        you will run at a <strong>
          {paceConverter(calculations.pace.run, 'mih').minmi}
        </strong> per mile pace
        for <strong>{calculations.intervals}</strong> intervals. In each
        interval, you will run {' '}
        <strong>{calculations.distance.run.toFixed(2)}</strong> miles
        and walk <strong>{calculations.distance.walk.toFixed(2)}</strong> miles.
      </p>
    </div>
  ) : (<div />);
}