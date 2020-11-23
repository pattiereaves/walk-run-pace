import * as React from 'react';
import { Values } from '../../pages';

export type Props = {
  values: Values;
  setValues(arg: Values): void;
};

export default function Form({
  values,
  setValues,
}: Props) {

  const handleDistance = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newValues = {...values};
    newValues.event.distance = +event.target.value;
    setValues(newValues);
  };

  const handlePace = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValues = {...values};
    newValues.event.duration = +event.target.value;
    setValues(newValues);
  };

  const handleRunInterval = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValues = {...values};
    newValues.intervalDuration.run = +event.target.value;
    setValues(newValues);
  };

  const handleWalkDuration = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValues = {...values};
    newValues.intervalDuration.walk = +event.target.value;
    setValues(newValues);
  }

  return (
    <form>
      <fieldset>
        <legend>Event details</legend>
        <label htmlFor="event-distance">Event</label>
        <select
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
        <label htmlFor="event-pace">Event goal</label>
        <input
          type="text"
          id="event-pace"
          required
          onChange={handlePace}
          value={values.event.duration}
        />
        <span>
          minutes
        </span>
      </fieldset>
      <fieldset>
        <legend>Intervals</legend>
        <div>
          <label htmlFor="run-duration">
            Run duration
          </label>
          <input
            type="number"
            name="run-duration"
            id="run-intervals"
            onChange={handleRunInterval}
            value={values.intervalDuration.run}
          />
          <span>minutes</span>
        </div>
        <div>
          <div>
            <label htmlFor="walk-duration">
              Walk duration
            </label>
            <input
              type="number"
              id="walk-duration"
              required
              onChange={handleWalkDuration}
              value={values.intervalDuration.walk}
            />
            <span>minutes</span>
            <div>
              Walk pace defaults to 16 minutes per mile.
            </div>
          </div>
        </div>
      </fieldset>
    </form>
  );
}