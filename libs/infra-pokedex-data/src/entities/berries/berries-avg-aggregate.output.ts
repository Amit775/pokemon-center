import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class BerriesAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    item_id?: number;

    @Field(() => Float, {nullable:true})
    firmness_id?: number;

    @Field(() => Float, {nullable:true})
    natural_gift_power?: number;

    @Field(() => Float, {nullable:true})
    natural_gift_type_id?: number;

    @Field(() => Float, {nullable:true})
    size?: number;

    @Field(() => Float, {nullable:true})
    max_harvest?: number;

    @Field(() => Float, {nullable:true})
    growth_time?: number;

    @Field(() => Float, {nullable:true})
    soil_dryness?: number;

    @Field(() => Float, {nullable:true})
    smoothness?: number;
}
