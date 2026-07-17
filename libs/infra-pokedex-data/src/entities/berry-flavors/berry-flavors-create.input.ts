import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { BerriesCreateNestedOneWithoutFlavorsInput } from '../berries/berries-create-nested-one-without-flavors.input';
import { ContestTypesCreateNestedOneWithoutBerryFlavorsInput } from '../contest-types/contest-types-create-nested-one-without-berry-flavors.input';
import { TypesCreateNestedOneWithoutBerryFlavorsInput } from '../types/types-create-nested-one-without-berry-flavors.input';

@InputType()
export class BerryFlavorsCreateInput {

    @Field(() => Int, {nullable:false})
    flavor!: number;

    @Field(() => BerriesCreateNestedOneWithoutFlavorsInput, {nullable:false})
    berry!: BerriesCreateNestedOneWithoutFlavorsInput;

    @Field(() => ContestTypesCreateNestedOneWithoutBerryFlavorsInput, {nullable:false})
    contestType!: ContestTypesCreateNestedOneWithoutBerryFlavorsInput;

    @Field(() => TypesCreateNestedOneWithoutBerryFlavorsInput, {nullable:false})
    type!: TypesCreateNestedOneWithoutBerryFlavorsInput;
}
