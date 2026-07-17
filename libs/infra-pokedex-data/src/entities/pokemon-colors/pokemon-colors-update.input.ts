import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonSpeciesUpdateManyWithoutColorNestedInput } from '../pokemon-species/pokemon-species-update-many-without-color-nested.input';

@InputType()
export class PokemonColorsUpdateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => PokemonSpeciesUpdateManyWithoutColorNestedInput, {nullable:true})
    species?: Identity<PokemonSpeciesUpdateManyWithoutColorNestedInput>;
}
