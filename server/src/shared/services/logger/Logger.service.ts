import { Logger } from 'tslog'
import { ILoggerService } from './Logger.interface'

export class LoggerService implements ILoggerService {
	logger: Logger

	constructor() {
		this.logger = new Logger({
			displayInstanceName: false,
			displayLoggerName: false,
			displayFilePath: 'hidden',
			displayFunctionName: false,
		})
	}

	log(...args: unknown[]): void {
		this.logger.info(...args)
	}

	warn(...args: unknown[]): void {
		this.logger.warn(...args)
	}

	error(...args: unknown[]): void {
		this.logger.error(...args)
	}
}