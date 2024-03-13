import { Module } from '@nestjs/common';
import { DynamicController } from './dynamic.controller';

@Module({
  controllers: [DynamicController],
})
export class DynamicModule {}
