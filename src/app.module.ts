import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
// import { NewsModule } from './news/news.module';

@Module({
	imports: [
		// NewsModule,
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
