import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonSpeciesWhereInput } from './pokemon-species-where.input';
import { Type } from 'class-transformer';
import { PokemonSpeciesUpdateWithoutPokemonInput } from './pokemon-species-update-without-pokemon.input';

@InputType()
export class PokemonSpeciesUpdateToOneWithWhereWithoutPokemonInput {

    @Field(() => PokemonSpeciesWhereInput, {nullable:true})
    @Type(() => PokemonSpeciesWhereInput)
    where?: Identity<PokemonSpeciesWhereInput>;

    @Field(() => PokemonSpeciesUpdateWithoutPokemonInput, {nullable:false})
    @Type(() => PokemonSpeciesUpdateWithoutPokemonInput)
    data!: Identity<PokemonSpeciesUpdateWithoutPokemonInput>;
}
