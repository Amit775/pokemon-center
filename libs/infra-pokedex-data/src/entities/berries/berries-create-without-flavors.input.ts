import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ItemsCreateNestedOneWithoutBerriesInput } from '../items/items-create-nested-one-without-berries.input';
import { BerryFirmnessCreateNestedOneWithoutBerriesInput } from '../berry-firmness/berry-firmness-create-nested-one-without-berries.input';
import { TypesCreateNestedOneWithoutNaturalGiftTypesInput } from '../types/types-create-nested-one-without-natural-gift-types.input';

@InputType()
export class BerriesCreateWithoutFlavorsInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:true})
    natural_gift_power?: number;

    @Field(() => Int, {nullable:false})
    size!: number;

    @Field(() => Int, {nullable:false})
    max_harvest!: number;

    @Field(() => Int, {nullable:false})
    growth_time!: number;

    @Field(() => Int, {nullable:false})
    soil_dryness!: number;

    @Field(() => Int, {nullable:false})
    smoothness!: number;

    @Field(() => ItemsCreateNestedOneWithoutBerriesInput, {nullable:false})
    item!: Identity<ItemsCreateNestedOneWithoutBerriesInput>;

    @Field(() => BerryFirmnessCreateNestedOneWithoutBerriesInput, {nullable:false})
    firmness!: Identity<BerryFirmnessCreateNestedOneWithoutBerriesInput>;

    @Field(() => TypesCreateNestedOneWithoutNaturalGiftTypesInput, {nullable:true})
    naturalGiftType?: Identity<TypesCreateNestedOneWithoutNaturalGiftTypesInput>;
}
