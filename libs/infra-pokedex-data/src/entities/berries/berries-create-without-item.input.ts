import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { BerryFirmnessCreateNestedOneWithoutBerriesInput } from '../berry-firmness/berry-firmness-create-nested-one-without-berries.input';
import { TypesCreateNestedOneWithoutNaturalGiftTypesInput } from '../types/types-create-nested-one-without-natural-gift-types.input';
import { BerryFlavorsCreateNestedManyWithoutBerryInput } from '../berry-flavors/berry-flavors-create-nested-many-without-berry.input';

@InputType()
export class BerriesCreateWithoutItemInput {

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

    @Field(() => BerryFirmnessCreateNestedOneWithoutBerriesInput, {nullable:false})
    firmness!: Identity<BerryFirmnessCreateNestedOneWithoutBerriesInput>;

    @Field(() => TypesCreateNestedOneWithoutNaturalGiftTypesInput, {nullable:true})
    naturalGiftType?: Identity<TypesCreateNestedOneWithoutNaturalGiftTypesInput>;

    @Field(() => BerryFlavorsCreateNestedManyWithoutBerryInput, {nullable:true})
    flavors?: Identity<BerryFlavorsCreateNestedManyWithoutBerryInput>;
}
