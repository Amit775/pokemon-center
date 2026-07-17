import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class ExperienceUncheckedUpdateInput {

    @Field(() => Int, {nullable:true})
    growth_rate_id?: number;

    @Field(() => Int, {nullable:true})
    level?: number;

    @Field(() => Int, {nullable:true})
    experience?: number;
}
