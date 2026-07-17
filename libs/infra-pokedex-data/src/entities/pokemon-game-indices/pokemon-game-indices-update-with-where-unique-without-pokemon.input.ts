import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonGameIndicesWhereUniqueInput } from './pokemon-game-indices-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { PokemonGameIndicesUpdateWithoutPokemonInput } from './pokemon-game-indices-update-without-pokemon.input';

@InputType()
export class PokemonGameIndicesUpdateWithWhereUniqueWithoutPokemonInput {

    @Field(() => PokemonGameIndicesWhereUniqueInput, {nullable:false})
    @Type(() => PokemonGameIndicesWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonGameIndicesWhereUniqueInput, 'pokemon_id_version_id'>;

    @Field(() => PokemonGameIndicesUpdateWithoutPokemonInput, {nullable:false})
    @Type(() => PokemonGameIndicesUpdateWithoutPokemonInput)
    data!: Identity<PokemonGameIndicesUpdateWithoutPokemonInput>;
}
