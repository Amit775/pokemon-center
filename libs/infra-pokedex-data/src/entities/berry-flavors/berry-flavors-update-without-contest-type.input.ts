import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { BerriesUpdateOneRequiredWithoutFlavorsNestedInput } from '../berries/berries-update-one-required-without-flavors-nested.input';
import { TypesUpdateOneRequiredWithoutBerryFlavorsNestedInput } from '../types/types-update-one-required-without-berry-flavors-nested.input';

@InputType()
export class BerryFlavorsUpdateWithoutContestTypeInput {

    @Field(() => Int, {nullable:true})
    flavor?: number;

    @Field(() => BerriesUpdateOneRequiredWithoutFlavorsNestedInput, {nullable:true})
    berry?: Identity<BerriesUpdateOneRequiredWithoutFlavorsNestedInput>;

    @Field(() => TypesUpdateOneRequiredWithoutBerryFlavorsNestedInput, {nullable:true})
    type?: Identity<TypesUpdateOneRequiredWithoutBerryFlavorsNestedInput>;
}
