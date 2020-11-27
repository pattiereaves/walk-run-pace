import * as React from 'react';
import { useRouter } from 'next/router';
import qs from 'query-string';
import flat from 'flat';
import { Values } from '../../types';
import TimeField from '../TimeField';
import styles from './form.module.css';

export type Props = {
  values: Values;
  setValues(arg: Values): void;
};

export default function Form({
  values,
  setValues,
}: Props) {
  const router = useRouter();

  const handleDistance = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newValues = {...values};
    newValues.event.distance = +event.target.value;
    setValues(newValues);
    router.push(`?${qs.stringify(flat(newValues))}`, undefined, { shallow: true } );
  };

  const handleDuration = (time: number) => {
    const newValues = {...values};
    newValues.event.duration = time;
    setValues(newValues);
    router.push(`?${qs.stringify(flat(newValues))}`, undefined, { shallow: true } );
  };

  const handleRunInterval = (time: number) => {
    const newValues = {...values};
    newValues.intervalDuration.run = time;
    setValues(newValues);
    router.push(`?${qs.stringify(flat(newValues))}`, undefined, { shallow: true } );
  };

  const handleWalkDuration = (time: number) => {
    const newValues = {...values};
    newValues.intervalDuration.walk = time;
    setValues(newValues);
    router.push(`?${qs.stringify(flat(newValues))}`, undefined, { shallow: true } );
  }

  return (
    <form className="block border-double rounded-lg border-4 border-white p-2 mb-4 md:-mx-16">
      <fieldset className="max-w-full flex flex-nowrap align-middle">
        <legend className="text-base font-serif mb-3 font-bold border-b-2 block w-full">
          Event details
        </legend>
        <div className="block mb-1 mr-2 flex-grow">
          <div className="flex flex-col">
            <label className="text-2xl flex-shrink" htmlFor="event-distance">
              Distance
            </label>
            <select
              className="flex-grow"
              name="event-distance"
              id="event-distance"
              required
              value={values.event.distance}
              onChange={handleDistance}
            >
              <option value="3.10686">5k</option>
              <option value="6.21371">10k</option>
              <option value="13.1">Half Marathon</option>
              <option value="26.2">Marathon</option>
              <option value="31.0686">50k</option>
              <option value="50">50 miles</option>
            </select>
          </div>
        </div>
        <div className={styles['goal-time']}>
          <TimeField time={values.event.duration} setTime={handleDuration} legend="Goal time" />
        </div>
      </fieldset>
      <fieldset className="flex flex-wrap justify-around">
        <legend className="text-base font-serif mb-3 font-bold border-b-2 block w-full">
          Intervals
        </legend>
        <div className={styles['intervals']}>
          <TimeField
            time={values.intervalDuration.run}
            setTime={handleRunInterval}
            legend="🏃‍♀️ Run"
            showHours={false}
          />
        </div>
        <div className={styles['intervals']}>
          <TimeField
            time={values.intervalDuration.walk}
            setTime={handleWalkDuration}
            showHours={false}
            legend="🚶‍♀️ Walk"
          />
        </div>
        <div className="text-center block w-full flex-grow-1 text-base italic">
          Walk pace assumes 16:00 per mile.
        </div>
      </fieldset>
    </form>
  );
}