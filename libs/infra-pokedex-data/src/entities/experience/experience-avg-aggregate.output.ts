import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class ExperienceAvgAggregate {

    @Field(() => Float, {nullable:true})
    growth_rate_id?: number;

    @Field(() => Float, {nullable:true})
    level?: number;

    @Field(() => Float, {nullable:true})
    experience?: number;
}
