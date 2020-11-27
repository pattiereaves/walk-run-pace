import * as React from 'react';
import { convert as paceConverter } from 'pace-converter';
import { Calculations } from '../../types';

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
        Run at a <span className="text-white p-1 border-blue-200 border-dashed border-4">
          {paceConverter(calculations.pace.run, 'mih').minmi}
        </span> per mile pace
        for <span className="border-dashed rounded-full border-4 py-1 px-2 border-blue-200 text-white">
          {calculations.intervals.toFixed(1)}
        </span> intervals. Each interval, averages 🏃‍♀️ running {' '}
        <strong className="border-dashed border-b-4 border-black">{calculations.distance.run.toFixed(2)}</strong> miles
        and 🚶‍♀️ walking <strong className="border-dashed border-b-4 border-black">{calculations.distance.walk.toFixed(2)}</strong> miles.
      </p>
    </div>
  ) : (<div />);
}