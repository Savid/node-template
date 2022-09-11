import logger from '@savid/logger';

import app from '#app/app';

logger.info('starting REPLACEME service');

app().catch((err) => {
  logger.error('app error', { error: err.toString(), stack: err.stack });
});
