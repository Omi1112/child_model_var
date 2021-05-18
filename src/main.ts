import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';

async function bootstrap() {
	// for local use only
	//  addEnvVars();
	const app = await NestFactory.create(ApplicationModule);
	app.useGlobalPipes(new ValidationPipe());
	await app.listen(process.env.PORT || 3000);
	addDx();
}
bootstrap();

function addDx() {
	// @def chalk & log instantiation for logging and opening the server url
	const chalk = require('chalk');
	const log = console.log;

	// @def opn instantiation for opening the browser for better dX
	// const opn = require('opn');

	log(chalk.cyan('\nStarting the development server...\n'));

	// ! opens the browser for local use only
	// opn(`http://localhost:${process.env.PORT || 3000}/graphql`);
	log(
		chalk.green(
			`Serving on http://localhost:${process.env.PORT || 3000}/graphql`,
		),
	);
}

function addEnvVars() {
	// @def dotenv instantiation for loading .env variables
	require('dotenv').config();
}
