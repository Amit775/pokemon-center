import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonSpeciesUncheckedUpdateManyWithoutColorNestedInput } from '../pokemon-species/pokemon-species-unchecked-update-many-without-color-nested.input';

@InputType()
export class PokemonColorsUncheckedUpdateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => PokemonSpeciesUncheckedUpdateManyWithoutColorNestedInput, {nullable:true})
    species?: Identity<PokemonSpeciesUncheckedUpdateManyWithoutColorNestedInput>;
}
