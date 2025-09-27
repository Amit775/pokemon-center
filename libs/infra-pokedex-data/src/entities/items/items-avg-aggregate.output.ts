import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class ItemsAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    category_id?: number;

    @Field(() => Float, {nullable:true})
    cost?: number;

    @Field(() => Float, {nullable:true})
    fling_power?: number;

    @Field(() => Float, {nullable:true})
    fling_effect_id?: number;
}
