import dayjs from 'dayjs';
import 'dayjs/locale/ca';
import 'dayjs/locale/en';
import 'dayjs/locale/es';
import calendar from 'dayjs/plugin/calendar';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(calendar);
dayjs.extend(relativeTime);
dayjs.extend(localizedFormat);
dayjs.locale('es');

export default function toDate(dateStr: string | undefined) {
  if (!dateStr) return;

  const [day, month, rest] = dateStr.split('-');
  const [year, time] = rest.split(' ');
  const timestamp = Date.parse(`${year}-${month}-${day}T${time}`);

  return dayjs(timestamp);
}
