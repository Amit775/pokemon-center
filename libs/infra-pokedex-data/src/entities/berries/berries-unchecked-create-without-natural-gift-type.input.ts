import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { BerryFlavorsUncheckedCreateNestedManyWithoutBerryInput } from '../berry-flavors/berry-flavors-unchecked-create-nested-many-without-berry.input';

@InputType()
export class BerriesUncheckedCreateWithoutNaturalGiftTypeInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    item_id!: number;

    @Field(() => Int, {nullable:false})
    firmness_id!: number;

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

    @Field(() => BerryFlavorsUncheckedCreateNestedManyWithoutBerryInput, {nullable:true})
    flavors?: BerryFlavorsUncheckedCreateNestedManyWithoutBerryInput;
}
