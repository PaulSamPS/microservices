import { Module } from '@nestjs/common';
import { PrismaModule } from '@lib/providers/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
})
export class ProvidersModule {}
