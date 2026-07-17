import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ContestTypesCreateNestedOneWithoutBerryFlavorsInput } from '../contest-types/contest-types-create-nested-one-without-berry-flavors.input';
import { TypesCreateNestedOneWithoutBerryFlavorsInput } from '../types/types-create-nested-one-without-berry-flavors.input';

@InputType()
export class BerryFlavorsCreateWithoutBerryInput {

    @Field(() => Int, {nullable:false})
    flavor!: number;

    @Field(() => ContestTypesCreateNestedOneWithoutBerryFlavorsInput, {nullable:false})
    contestType!: Identity<ContestTypesCreateNestedOneWithoutBerryFlavorsInput>;

    @Field(() => TypesCreateNestedOneWithoutBerryFlavorsInput, {nullable:false})
    type!: Identity<TypesCreateNestedOneWithoutBerryFlavorsInput>;
}
