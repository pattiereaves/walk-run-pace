import * as React from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Form from '../components/Form';
import Result from '../components/Result';

export type Values = {
  event: {
    /** Distance in miles. */
    distance: number;
    /** Duration in seconds. */
    duration: number;
  },
  intervalDuration: {
    /** Duration in seconds. */
    run: number;
    /** Duration in seconds. */
    walk: number;
  };
};

export type Calculations = {
  /** Distance for interval by duration. */
  distance: {
    /** Interval distance in miles. */
    run: number;
    /** Interval distance in miles. */
    walk: number;
  };
  /** Number of run-walk intervals */
  intervals: number;
  /** Paces by intensity. */
  pace: {
    /** Minutes per mile for running interval. */
    run: number;
    /** Minutes per mile for walking interval. */
    walk: number;
  };
};

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
    <div className={styles.container}>
      <Head>
        <title>Walk - Run Pace calculator</title>
        <link rel="icon" href="/stopwatch.png" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Walk - Run pace calculator</h1>
        <p>
          Determine how fast you need to run to make a certain time based on
          your distance and number of walk breaks.
        </p>
        <Form values={values} setValues={setValues} />
        <Result calculations={calculations} />
      </main>
    </div>
  )
}
