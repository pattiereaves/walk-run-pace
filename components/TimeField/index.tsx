import * as React from 'react';
import uuid from '../../utils/uuid';

export type Props = {
  /** Set time value. */
  setTime(arg1: number): void;
  /** Duration in minutes */
  time: number;
  /** Whether or not to display the hours field. */
  showHours?: boolean;
  /** The legend for the fieldset. */
  legend?: string;
};

const minutesToHours = (mins: number) => Math.floor(mins / 60);
const remainingMinutes = (mins: number) => Math.abs(mins % 60);
const remainingSeconds = (mins: number) =>  (mins - Math.floor(mins)) * 60;

const TimeField = ({
  setTime,
  time,
  showHours = true,
  legend = '',
}: Props) => {
  const [unitsOfTime, setUnitsOfTime] = React.useState({
    hours: minutesToHours(time),
    minutes: remainingMinutes(time),
    seconds: remainingSeconds(time),
  });

  const setTimeInMinutes = () => {
    setTime(
      // Hours to minutes.
      (unitsOfTime.hours * 60)
      // Minutes stay the same.
      + unitsOfTime.minutes
      // Seconds to minutes.
      + (unitsOfTime.seconds / 60)
    );
  };

  React.useEffect(setTimeInMinutes, [unitsOfTime]);

  React.useEffect(function passTimeUpdateToProps() {
    const { hours, minutes, seconds } = unitsOfTime;

    // Convert the values into sub-units.
    const newUnitsOfTime = {
      hours: minutesToHours(time),
      minutes: remainingMinutes(time),
      seconds: remainingSeconds(time),
    };

    if (JSON.stringify(newUnitsOfTime) !== JSON.stringify(unitsOfTime)) {
      setUnitsOfTime(newUnitsOfTime);
    }
  }, [time]);

  const handleFieldUpdate = (field: 'hours'|'minutes'|'seconds', value: number) => {
    const newUnitsOfTime = {
      ...unitsOfTime,
      [field]: value,
    };
    setUnitsOfTime(newUnitsOfTime);
  }

  const id = uuid();

  return (
    <fieldset className="flex flex-nowrap flex-row w-full max-w-full mb-1 align-middle">
      {legend !== '' ? (
        <legend className='label'>
          {legend}
        </legend>
      ) : null}
      <div className="inline-flex flex-nowrap">
        {
          showHours ? (
            <div className="inline-flex flex-wrap-reversed flex-col flex-shrink-1">
              <label className="w-auto order-2 text-sm" htmlFor={`hours-${id}`}>
                Hours
              </label>
              <input className="inline w-14 mb-0" type="number" value={unitsOfTime.hours} onChange={(e) => handleFieldUpdate('hours', +e.target.value)} />
            </div>
          ) : null
        }
        <div className="inline-flex flex-wrap-reversed flex-col flex-shrink-1">
          <label className="w-auto order-2 text-sm" htmlFor={`minutes-${id}`}>
            Minutes
          </label>
          <input className="inline w-14 mb-0" type="number" value={unitsOfTime.minutes} onChange={(e) => handleFieldUpdate('minutes', +e.target.value)} />
        </div>
        <div className="inline-flex flex-wrap-reversed flex-col flex-shrink-1">
          <label className="w-auto order-2 text-sm" htmlFor={`seconds-${id}`}>
            Seconds
          </label>
          <input className="inline w-14 mb-0" type="number" value={unitsOfTime.seconds} onChange={(e) => handleFieldUpdate('seconds', +e.target.value)} />
        </div>
      </div>
    </fieldset>
  )
};
export default TimeField;