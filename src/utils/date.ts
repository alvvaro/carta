import dayjs from 'dayjs';
import 'dayjs/locale/ca';
import 'dayjs/locale/en';
import 'dayjs/locale/es';
import calendar from 'dayjs/plugin/calendar';
import duration from 'dayjs/plugin/duration';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(calendar);
dayjs.extend(relativeTime);
dayjs.extend(localizedFormat);
dayjs.extend(duration);
dayjs.locale('es');

const dateUtils = {
  toDate: (dateStr: string | undefined) => {
    if (!dateStr) return;

    const [day, month, rest] = dateStr.split('-');
    const [year, time] = rest.split(' ');
    const timestamp = Date.parse(`${year}-${month}-${day}T${time}`);

    return dayjs(timestamp);
  },
  toCalendar: (dateStr: string | undefined) => {
    return dateUtils.toDate(dateStr)?.calendar();
  },
  toDuration: (number: number | undefined) => {
    if (!number) return;

    const duration = dayjs.duration(number);

    return (
      duration.asHours() >= 1 ? duration.format('H[h] m[min]')
      : duration.asMinutes() >= 1 ? duration.format('m[min]')
      : duration.format('s[s]')
    );
  },
};

export default dateUtils;
