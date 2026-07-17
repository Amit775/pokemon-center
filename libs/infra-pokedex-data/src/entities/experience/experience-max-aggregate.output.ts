import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ExperienceMaxAggregate {

    @Field(() => Int, {nullable:true})
    growth_rate_id?: number;

    @Field(() => Int, {nullable:true})
    level?: number;

    @Field(() => Int, {nullable:true})
    experience?: number;
}
