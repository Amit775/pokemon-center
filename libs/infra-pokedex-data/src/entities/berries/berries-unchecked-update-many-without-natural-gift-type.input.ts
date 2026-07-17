import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class BerriesUncheckedUpdateManyWithoutNaturalGiftTypeInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    item_id?: number;

    @Field(() => Int, {nullable:true})
    firmness_id?: number;

    @Field(() => Int, {nullable:true})
    natural_gift_power?: number;

    @Field(() => Int, {nullable:true})
    size?: number;

    @Field(() => Int, {nullable:true})
    max_harvest?: number;

    @Field(() => Int, {nullable:true})
    growth_time?: number;

    @Field(() => Int, {nullable:true})
    soil_dryness?: number;

    @Field(() => Int, {nullable:true})
    smoothness?: number;
}
