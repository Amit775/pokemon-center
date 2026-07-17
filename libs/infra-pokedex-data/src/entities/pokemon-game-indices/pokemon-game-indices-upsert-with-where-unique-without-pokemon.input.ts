import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PokemonGameIndicesWhereUniqueInput } from './pokemon-game-indices-where-unique.input';
import { Type } from 'class-transformer';
import { PokemonGameIndicesUpdateWithoutPokemonInput } from './pokemon-game-indices-update-without-pokemon.input';
import { PokemonGameIndicesCreateWithoutPokemonInput } from './pokemon-game-indices-create-without-pokemon.input';

@InputType()
export class PokemonGameIndicesUpsertWithWhereUniqueWithoutPokemonInput {

    @Field(() => PokemonGameIndicesWhereUniqueInput, {nullable:false})
    @Type(() => PokemonGameIndicesWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonGameIndicesWhereUniqueInput, 'pokemon_id_version_id'>;

    @Field(() => PokemonGameIndicesUpdateWithoutPokemonInput, {nullable:false})
    @Type(() => PokemonGameIndicesUpdateWithoutPokemonInput)
    update!: PokemonGameIndicesUpdateWithoutPokemonInput;

    @Field(() => PokemonGameIndicesCreateWithoutPokemonInput, {nullable:false})
    @Type(() => PokemonGameIndicesCreateWithoutPokemonInput)
    create!: PokemonGameIndicesCreateWithoutPokemonInput;
}
