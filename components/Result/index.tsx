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
    <div className="results">
      <h2 className="sr-only">
        Results
      </h2>
      <p className="text-xl leading-loose">
        To achieve this time goal,
        you will run at a <span className="font-bold text-green-500 p-1 border-green-500 border-dashed border-2">
          {paceConverter(calculations.pace.run, 'mih').minmi}
        </span> per mile pace
        for <span className="border-dashed rounded-full border-2 py-1 px-2 border-red-500 text-red-500 font-bold">
          {calculations.intervals}
        </span> intervals. In each
        interval, you will run {' '}
        <strong>{calculations.distance.run.toFixed(2)}</strong> miles
        and walk <strong>{calculations.distance.walk.toFixed(2)}</strong> miles.
      </p>
    </div>
  ) : (<div />);
}