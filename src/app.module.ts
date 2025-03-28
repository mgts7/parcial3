import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { ContestantsModule } from './contestants/contestants.module';
import { BattlesModule } from './battles/battles.module';
import { DictatorsModule } from './dictators/dictators.module';
import { SponsorsModule } from './sponsors/sponsors.module';
import { TransactionsModule } from './transactions/transactions.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProfileModule } from './profile/profile.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [

    ConfigModule.forRoot({
      envFilePath: './.env', 
      isGlobal: true,
      
    }),

    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL || '',
      ssl: process.env.DATABASE_URL?.includes("sslmode=no-verify") ? false : { rejectUnauthorized: false },
      extra: {
        ssl: {
          rejectUnauthorized: false,
        },
      },
      synchronize: true,
      autoLoadEntities: true,
    }),
    ContestantsModule,
    BattlesModule,
    DictatorsModule,
    SponsorsModule,
    TransactionsModule,
    ProfileModule,
    UsersModule,
    AuthModule,
  ],
})
export class AppModule {}



//import { Contestant } from './entities/contestant.entity';
//import { Battles } from './battles/battle.entity';
//import { Dictators } from './dictators/dictator.entity';
//import { Sponsors } from './sponsors/sponsor.entity';
//import { Transactions } from './transactions/transaction.entity';