import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class ExperienceCreateManyGrowthRateInput {

    @Field(() => Int, {nullable:false})
    level!: number;

    @Field(() => Int, {nullable:false})
    experience!: number;
}
