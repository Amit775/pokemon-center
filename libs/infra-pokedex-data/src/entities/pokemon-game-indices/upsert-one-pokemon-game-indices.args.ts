import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonGameIndicesWhereUniqueInput } from './pokemon-game-indices-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { PokemonGameIndicesCreateInput } from './pokemon-game-indices-create.input';
import { PokemonGameIndicesUpdateInput } from './pokemon-game-indices-update.input';

@ArgsType()
export class UpsertOnePokemonGameIndicesArgs {

    @Field(() => PokemonGameIndicesWhereUniqueInput, {nullable:false})
    @Type(() => PokemonGameIndicesWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonGameIndicesWhereUniqueInput, 'pokemon_id_version_id'>;

    @Field(() => PokemonGameIndicesCreateInput, {nullable:false})
    @Type(() => PokemonGameIndicesCreateInput)
    create!: Identity<PokemonGameIndicesCreateInput>;

    @Field(() => PokemonGameIndicesUpdateInput, {nullable:false})
    @Type(() => PokemonGameIndicesUpdateInput)
    update!: Identity<PokemonGameIndicesUpdateInput>;
}
