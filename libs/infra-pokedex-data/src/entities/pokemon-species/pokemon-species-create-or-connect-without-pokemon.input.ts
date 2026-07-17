import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonSpeciesWhereUniqueInput } from './pokemon-species-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { PokemonSpeciesCreateWithoutPokemonInput } from './pokemon-species-create-without-pokemon.input';

@InputType()
export class PokemonSpeciesCreateOrConnectWithoutPokemonInput {

    @Field(() => PokemonSpeciesWhereUniqueInput, {nullable:false})
    @Type(() => PokemonSpeciesWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonSpeciesWhereUniqueInput, 'id'>;

    @Field(() => PokemonSpeciesCreateWithoutPokemonInput, {nullable:false})
    @Type(() => PokemonSpeciesCreateWithoutPokemonInput)
    create!: Identity<PokemonSpeciesCreateWithoutPokemonInput>;
}
