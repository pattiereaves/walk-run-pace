import * as React from 'react';
import Head from 'next/head'
import Form from '../components/Form';
import Result from '../components/Result';
import { Values, Calculations } from '../types';

export default function Home() {
  const [values, setValues] = React.useState<Values>({
    event: {
      distance: 3.10686, // 5K
      duration: 60, // 1 hour
    },
    intervalDuration: {
      run: 4,
      walk: 1,
    },
  });

  const [calculations, setCalculations] = React.useState<Calculations|undefined>(undefined);

  const walkPace = 16;

  React.useEffect(() => {
    const { distance, duration } = values.event;
    const eachIntervalDuration = values.intervalDuration.run + values.intervalDuration.walk;
    const totalIntervals = eachIntervalDuration > 0 ? duration / eachIntervalDuration : 0;
    const intervalDistance = totalIntervals > 0 ? distance / totalIntervals : 0;
    const walkDistance = values.intervalDuration.walk / walkPace;
    const runDistance = intervalDistance - walkDistance;
    const runPace = runDistance / values.intervalDuration.run * 60;

    setCalculations({
      distance: {
        run: runDistance,
        walk: walkDistance,
      },
      intervals: totalIntervals,
      pace: {
        run: runPace,
        walk: walkPace,
      },
    });
  }, [values]);

  return (
    <div className="container mx-auto px-4 flex flex-wrap">
      <Head>
        <title>Walk - Run Pace calculator</title>
        <link rel="icon" href="/stopwatch.png" />
      </Head>
      <main className="max-w-md mx-auto pt-9">
        <h1 className="text-2xl font-bold font-serif mb-3">
          <img src="/stopwatch.png" className="w-8 mr-2 inline" alt="" />
          Walk - Run Pace Calculator
        </h1>
        <p className="text-base mb-3">
          Determine how fast you need to run to make a goal time based on
          your distance and number of walk breaks.
        </p>
        <Form values={values} setValues={setValues} />
        <Result calculations={calculations} />
      </main>
    </div>
  );
}
