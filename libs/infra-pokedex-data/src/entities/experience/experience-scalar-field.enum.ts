import { registerEnumType } from '@nestjs/graphql';

export enum ExperienceScalarFieldEnum {
    growth_rate_id = "growth_rate_id",
    level = "level",
    experience = "experience"
}


registerEnumType(ExperienceScalarFieldEnum, { name: 'ExperienceScalarFieldEnum', description: undefined })
