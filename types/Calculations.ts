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