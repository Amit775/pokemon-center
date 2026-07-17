import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonSpeciesUpdateWithoutPokemonInput } from './pokemon-species-update-without-pokemon.input';
import { Type } from 'class-transformer';
import { PokemonSpeciesCreateWithoutPokemonInput } from './pokemon-species-create-without-pokemon.input';
import { PokemonSpeciesWhereInput } from './pokemon-species-where.input';

@InputType()
export class PokemonSpeciesUpsertWithoutPokemonInput {

    @Field(() => PokemonSpeciesUpdateWithoutPokemonInput, {nullable:false})
    @Type(() => PokemonSpeciesUpdateWithoutPokemonInput)
    update!: PokemonSpeciesUpdateWithoutPokemonInput;

    @Field(() => PokemonSpeciesCreateWithoutPokemonInput, {nullable:false})
    @Type(() => PokemonSpeciesCreateWithoutPokemonInput)
    create!: PokemonSpeciesCreateWithoutPokemonInput;

    @Field(() => PokemonSpeciesWhereInput, {nullable:true})
    @Type(() => PokemonSpeciesWhereInput)
    where?: PokemonSpeciesWhereInput;
}
