import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ExperienceCreateNestedManyWithoutGrowthRateInput } from '../experience/experience-create-nested-many-without-growth-rate.input';

@InputType()
export class GrowthRatesCreateWithoutSpeciesInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => String, {nullable:false})
    formula!: string;

    @Field(() => ExperienceCreateNestedManyWithoutGrowthRateInput, {nullable:true})
    experience?: Identity<ExperienceCreateNestedManyWithoutGrowthRateInput>;
}
