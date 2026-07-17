import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { BerryFlavorsUncheckedUpdateManyWithoutBerryNestedInput } from '../berry-flavors/berry-flavors-unchecked-update-many-without-berry-nested.input';

@InputType()
export class BerriesUncheckedUpdateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    item_id?: number;

    @Field(() => Int, {nullable:true})
    firmness_id?: number;

    @Field(() => Int, {nullable:true})
    natural_gift_power?: number;

    @Field(() => Int, {nullable:true})
    natural_gift_type_id?: number;

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

    @Field(() => BerryFlavorsUncheckedUpdateManyWithoutBerryNestedInput, {nullable:true})
    flavors?: Identity<BerryFlavorsUncheckedUpdateManyWithoutBerryNestedInput>;
}
