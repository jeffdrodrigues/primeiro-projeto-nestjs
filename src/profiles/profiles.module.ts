import { Module } from '@nestjs/common';
import { ProfilesController } from './profiles.controller';
import { ProfileService } from './shared/profile.service';

@Module({
    controllers: [ProfilesController],
    providers: [ProfileService]
})
export class ProfilesModule {}
