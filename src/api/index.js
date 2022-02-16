import server from './server';
import tasks from './tasks';

export default {
  ...tasks(server),
}
