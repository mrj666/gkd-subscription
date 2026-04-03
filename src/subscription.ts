import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups from './globalGroups';

export default defineGkdSubscription({
  id: 101325,
  name: 'My GKD Subscription',
  version: 1,
  author: 'mrj666',
  checkUpdateUrl: './gkd.version.json5',
  supportUri: 'https://github.com/mrj666/gkd-subscription',
  categories,
  globalGroups,
  apps: await batchImportApps(`${import.meta.dirname}/apps`),
});
