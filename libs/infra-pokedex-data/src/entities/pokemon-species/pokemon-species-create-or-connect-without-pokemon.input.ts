import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PokemonSpeciesWhereUniqueInput } from './pokemon-species-where-unique.input';
import { Type } from 'class-transformer';
import { PokemonSpeciesCreateWithoutPokemonInput } from './pokemon-species-create-without-pokemon.input';

@InputType()
export class PokemonSpeciesCreateOrConnectWithoutPokemonInput {

    @Field(() => PokemonSpeciesWhereUniqueInput, {nullable:false})
    @Type(() => PokemonSpeciesWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonSpeciesWhereUniqueInput, 'id'>;

    @Field(() => PokemonSpeciesCreateWithoutPokemonInput, {nullable:false})
    @Type(() => PokemonSpeciesCreateWithoutPokemonInput)
    create!: PokemonSpeciesCreateWithoutPokemonInput;
}
