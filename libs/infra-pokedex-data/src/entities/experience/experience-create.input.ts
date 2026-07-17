import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GrowthRatesCreateNestedOneWithoutExperienceInput } from '../growth-rates/growth-rates-create-nested-one-without-experience.input';

@InputType()
export class ExperienceCreateInput {

    @Field(() => Int, {nullable:false})
    level!: number;

    @Field(() => Int, {nullable:false})
    experience!: number;

    @Field(() => GrowthRatesCreateNestedOneWithoutExperienceInput, {nullable:false})
    growthRate!: GrowthRatesCreateNestedOneWithoutExperienceInput;
}
