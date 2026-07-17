import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { GrowthRatesUpdateOneRequiredWithoutExperienceNestedInput } from '../growth-rates/growth-rates-update-one-required-without-experience-nested.input';

@InputType()
export class ExperienceUpdateInput {

    @Field(() => Int, {nullable:true})
    level?: number;

    @Field(() => Int, {nullable:true})
    experience?: number;

    @Field(() => GrowthRatesUpdateOneRequiredWithoutExperienceNestedInput, {nullable:true})
    growthRate?: Identity<GrowthRatesUpdateOneRequiredWithoutExperienceNestedInput>;
}
