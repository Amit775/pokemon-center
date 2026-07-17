import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { BerryFirmnessUpdateOneRequiredWithoutBerriesNestedInput } from '../berry-firmness/berry-firmness-update-one-required-without-berries-nested.input';
import { TypesUpdateOneWithoutNaturalGiftTypesNestedInput } from '../types/types-update-one-without-natural-gift-types-nested.input';
import { BerryFlavorsUpdateManyWithoutBerryNestedInput } from '../berry-flavors/berry-flavors-update-many-without-berry-nested.input';

@InputType()
export class BerriesUpdateWithoutItemInput {

    @Field(() => Int, {nullable:true})
    id?: number;

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

    @Field(() => BerryFirmnessUpdateOneRequiredWithoutBerriesNestedInput, {nullable:true})
    firmness?: Identity<BerryFirmnessUpdateOneRequiredWithoutBerriesNestedInput>;

    @Field(() => TypesUpdateOneWithoutNaturalGiftTypesNestedInput, {nullable:true})
    naturalGiftType?: Identity<TypesUpdateOneWithoutNaturalGiftTypesNestedInput>;

    @Field(() => BerryFlavorsUpdateManyWithoutBerryNestedInput, {nullable:true})
    flavors?: Identity<BerryFlavorsUpdateManyWithoutBerryNestedInput>;
}
