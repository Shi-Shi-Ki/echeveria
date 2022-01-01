import { Injectable, LoggerService as BaseLogger } from '@nestjs/common'
import { configure, getLogger } from 'log4js'
import { join } from 'path'
import conf from 'config'

// const layout = {
//   type: 'pattern',
//   pattern: '%d{ISO8601_WITH_TZ_OFFSET} [%p] %m',
// };

// const defaultLoggerLevel = process.env.LOGGER_LEVEL || 'info';
// configure({
//   appenders: {
//     stdout: { type: 'stdout', layout },
//     file: {
//       type: 'file',
//       filename: join(__dirname,'logs/app.log'),
//       layout
//     },
//   },
//   categories: {
//     default: { appenders: ['stdout'], level: defaultLoggerLevel },
//     error: { appenders: ['stdout', 'file'], level: 'error' },
//   },
// });
// const defaultLogger = getLogger();

configure(join(__dirname, '../../', 'config/log4js.json'))
// configure('@config/log4js.json')
const defaultLogger = getLogger('app')

@Injectable()
export class LoggerService implements BaseLogger {
  log(message: string) {
    this.info(message);
  }

  debug(message: string) {
    defaultLogger.debug(message);
  }

  info(message: string) {
    defaultLogger.info(message);
  }

  warn(message: string) {
    defaultLogger.warn(message);
  }

  error(message: string, trace?: string) {
    const errorLogger = getLogger('error');
    if (trace) {
      errorLogger.error(`${message}\n${trace}`);
    } else {
      errorLogger.error(message);
    }
  }
}

