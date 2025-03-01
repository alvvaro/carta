import dayjs from 'dayjs';
import 'dayjs/locale/ca';
import 'dayjs/locale/en';
import 'dayjs/locale/es';
import calendar from 'dayjs/plugin/calendar';
import duration from 'dayjs/plugin/duration';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import relativeTime from 'dayjs/plugin/relativeTime';

import memoFn from './memo';

dayjs.extend(calendar);
dayjs.extend(relativeTime);
dayjs.extend(localizedFormat);
dayjs.extend(duration);
dayjs.locale('es');

const toDate = memoFn((dateStr: string | undefined) => {
  if (!dateStr) return;

  const [day, month, rest] = dateStr.split('-');
  const [year, time] = rest.split(' ');
  const timestamp = Date.parse(`${year}-${month}-${day}T${time}`);

  return dayjs(timestamp);
});

const toCalendar = memoFn((dateStr: string | undefined) => {
  return toDate(dateStr)?.calendar();
});

const toDuration = memoFn((number: number | undefined) => {
  if (!number) return;

  const duration = dayjs.duration(number);

  return (
    duration.asHours() >= 1 ? duration.format('H[h] m[min]')
    : duration.asMinutes() >= 1 ? duration.format('m[min]')
    : duration.format('s[s]')
  );
});

const dateUtils = {
  toDate,
  toCalendar,
  toDuration,
};

export default dateUtils;
