import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ExperienceUpdateManyWithoutGrowthRateNestedInput } from '../experience/experience-update-many-without-growth-rate-nested.input';

@InputType()
export class GrowthRatesUpdateWithoutSpeciesInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => String, {nullable:true})
    formula?: string;

    @Field(() => ExperienceUpdateManyWithoutGrowthRateNestedInput, {nullable:true})
    experience?: Identity<ExperienceUpdateManyWithoutGrowthRateNestedInput>;
}
