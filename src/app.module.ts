import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { UserModule } from './user/user.module';

@Module({
	imports: [
		UserModule,
		GraphQLModule.forRoot({
			typePaths: ['./**/*.graphql'],

			installSubscriptionHandlers: false,
			debug: true,
			playground: true,
			definitions: {
				path: join(process.cwd(), 'src/graphql.schema.ts'),
				outputAs: 'class',
			},
		}),
	],
})
export class ApplicationModule {}
