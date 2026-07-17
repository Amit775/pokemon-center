import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonGameIndicesUpdateInput } from './pokemon-game-indices-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonGameIndicesWhereUniqueInput } from './pokemon-game-indices-where-unique.input';

@ArgsType()
export class UpdateOnePokemonGameIndicesArgs {

    @Field(() => PokemonGameIndicesUpdateInput, {nullable:false})
    @Type(() => PokemonGameIndicesUpdateInput)
    data!: Identity<PokemonGameIndicesUpdateInput>;

    @Field(() => PokemonGameIndicesWhereUniqueInput, {nullable:false})
    @Type(() => PokemonGameIndicesWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonGameIndicesWhereUniqueInput, 'pokemon_id_version_id'>;
}
