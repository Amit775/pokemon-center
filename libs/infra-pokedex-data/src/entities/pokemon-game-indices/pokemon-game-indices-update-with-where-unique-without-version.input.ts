import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonGameIndicesWhereUniqueInput } from './pokemon-game-indices-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { PokemonGameIndicesUpdateWithoutVersionInput } from './pokemon-game-indices-update-without-version.input';

@InputType()
export class PokemonGameIndicesUpdateWithWhereUniqueWithoutVersionInput {

    @Field(() => PokemonGameIndicesWhereUniqueInput, {nullable:false})
    @Type(() => PokemonGameIndicesWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonGameIndicesWhereUniqueInput, 'pokemon_id_version_id'>;

    @Field(() => PokemonGameIndicesUpdateWithoutVersionInput, {nullable:false})
    @Type(() => PokemonGameIndicesUpdateWithoutVersionInput)
    data!: Identity<PokemonGameIndicesUpdateWithoutVersionInput>;
}
