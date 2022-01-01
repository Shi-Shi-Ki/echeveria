import { Logger, QueryRunner } from 'typeorm'
import { configure, getLogger } from 'log4js'
import { join } from 'path'

configure(join(__dirname, '../', 'config/log4js.json'))
const defaultLogger = getLogger('query')

export class TypeOrmCustomLogger implements Logger {
  logQuery(query: string, parameters?: any[], queryRunner?: QueryRunner) {
    defaultLogger.info(query);
  }
  logQueryError(error: string | Error, query: string, parameters?: any[], queryRunner?: QueryRunner) {
    defaultLogger.error(error);
  }
  logQuerySlow(time: number, query: string, parameters?: any[], queryRunner?: QueryRunner) {
    defaultLogger.info(query);
  }
  logSchemaBuild(message: string, queryRunner?: QueryRunner) {
    defaultLogger.debug(message);
  }
  logMigration(message: string, queryRunner?: QueryRunner) {
    defaultLogger.debug(message);
  }
  log(level: 'log' | 'info' | 'warn', message: any, queryRunner?: QueryRunner) {
    defaultLogger.debug(message);
  }
}
