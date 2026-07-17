import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { BerriesUpdateOneRequiredWithoutFlavorsNestedInput } from '../berries/berries-update-one-required-without-flavors-nested.input';
import { ContestTypesUpdateOneRequiredWithoutBerryFlavorsNestedInput } from '../contest-types/contest-types-update-one-required-without-berry-flavors-nested.input';

@InputType()
export class BerryFlavorsUpdateWithoutTypeInput {

    @Field(() => Int, {nullable:true})
    flavor?: number;

    @Field(() => BerriesUpdateOneRequiredWithoutFlavorsNestedInput, {nullable:true})
    berry?: Identity<BerriesUpdateOneRequiredWithoutFlavorsNestedInput>;

    @Field(() => ContestTypesUpdateOneRequiredWithoutBerryFlavorsNestedInput, {nullable:true})
    contestType?: Identity<ContestTypesUpdateOneRequiredWithoutBerryFlavorsNestedInput>;
}
