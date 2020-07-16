import { Controller, Get, Param } from '@nestjs/common';
import { ProfileService } from './shared/profile.service';
import { Profile } from './shared/profile';

@Controller('profiles')
export class ProfilesController {

    constructor(
        private profileService: ProfileService
    ){}

    @Get()
    async getAll() : Promise<Profile[]> {
        return this.profileService.getAll();
    }

    @Get(':id')
    async getById(@Param('id') id: number) : Promise<Profile> {
        return this.profileService.getById(id);
    }
}