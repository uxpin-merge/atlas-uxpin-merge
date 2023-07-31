import React, { useState } from 'react';
import CalendarM, { CalendarProps } from '@atlaskit/Calendar';

/**
 * @uxpindocurl https://atlassian.design/components/calendar/examples
 */
const Calendar = (props: CalendarProps) => {
  return (
      <CalendarM {...props}/>
  );
};

export default Calendar;