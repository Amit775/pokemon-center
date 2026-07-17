import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ExperienceUncheckedUpdateManyWithoutGrowthRateNestedInput } from '../experience/experience-unchecked-update-many-without-growth-rate-nested.input';

@InputType()
export class GrowthRatesUncheckedUpdateWithoutSpeciesInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => String, {nullable:true})
    formula?: string;

    @Field(() => ExperienceUncheckedUpdateManyWithoutGrowthRateNestedInput, {nullable:true})
    experience?: Identity<ExperienceUncheckedUpdateManyWithoutGrowthRateNestedInput>;
}
