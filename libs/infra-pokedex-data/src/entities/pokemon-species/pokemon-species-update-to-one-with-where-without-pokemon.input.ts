import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonSpeciesWhereInput } from './pokemon-species-where.input';
import { Type } from 'class-transformer';
import { PokemonSpeciesUpdateWithoutPokemonInput } from './pokemon-species-update-without-pokemon.input';

@InputType()
export class PokemonSpeciesUpdateToOneWithWhereWithoutPokemonInput {

    @Field(() => PokemonSpeciesWhereInput, {nullable:true})
    @Type(() => PokemonSpeciesWhereInput)
    where?: PokemonSpeciesWhereInput;

    @Field(() => PokemonSpeciesUpdateWithoutPokemonInput, {nullable:false})
    @Type(() => PokemonSpeciesUpdateWithoutPokemonInput)
    data!: PokemonSpeciesUpdateWithoutPokemonInput;
}
