import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ContestTypesUpdateOneRequiredWithoutBerryFlavorsNestedInput } from '../contest-types/contest-types-update-one-required-without-berry-flavors-nested.input';
import { TypesUpdateOneRequiredWithoutBerryFlavorsNestedInput } from '../types/types-update-one-required-without-berry-flavors-nested.input';

@InputType()
export class BerryFlavorsUpdateWithoutBerryInput {

    @Field(() => Int, {nullable:true})
    flavor?: number;

    @Field(() => ContestTypesUpdateOneRequiredWithoutBerryFlavorsNestedInput, {nullable:true})
    contestType?: Identity<ContestTypesUpdateOneRequiredWithoutBerryFlavorsNestedInput>;

    @Field(() => TypesUpdateOneRequiredWithoutBerryFlavorsNestedInput, {nullable:true})
    type?: Identity<TypesUpdateOneRequiredWithoutBerryFlavorsNestedInput>;
}
