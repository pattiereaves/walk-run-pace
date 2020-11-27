import * as React from 'react';
import Head from 'next/head';
import qs from 'query-string';
import flat from 'flat';
import Form from '../components/Form';
import Result from '../components/Result';
import { Values, Calculations } from '../types';

const defaultValues = {
  event: {
    distance: 3.10686, // 5K
    duration: 60, // 1 hour
  },
  intervalDuration: {
    run: 4,
    walk: 1,
  },
};

export default function Home() {
  const [values, setValues] = React.useState<Values>(defaultValues);

  const [calculations, setCalculations] = React.useState<Calculations|undefined>(undefined);

  const walkPace = 16;

  React.useEffect(function buildValuesFromQueryString() {
    const queryValues = flat.unflatten(
      qs.parse(location.search, { parseNumbers: true })
    ) as unknown as Values;
    if (Object.keys(queryValues).length > 0) {
      if (JSON.stringify(queryValues) !== JSON.stringify(values)) {
        // Set values to numbers.
        setValues(queryValues);
      }
    }
  }, []);

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
        <link rel="icon" href="stopwatch.png" />
      </Head>
      <main className="block max-w-md mx-auto pt-9">
        <h1 className="text-center text-2xl font-bold font-serif mb-3">
          <img src="stopwatch.png" className="w-8 mr-2 inline" alt="" />
          Walk - Run Pace Calculator
        </h1>
        <Form values={values} setValues={setValues} />
        <Result calculations={calculations} />
      </main>
    </div>
  );
}
