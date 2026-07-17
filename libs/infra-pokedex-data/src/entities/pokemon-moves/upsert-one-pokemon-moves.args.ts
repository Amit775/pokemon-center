import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonMovesWhereUniqueInput } from './pokemon-moves-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { PokemonMovesCreateInput } from './pokemon-moves-create.input';
import { PokemonMovesUpdateInput } from './pokemon-moves-update.input';

@ArgsType()
export class UpsertOnePokemonMovesArgs {

    @Field(() => PokemonMovesWhereUniqueInput, {nullable:false})
    @Type(() => PokemonMovesWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonMovesWhereUniqueInput, 'pokemon_id_version_group_id_move_id_pokemon_move_method_id'>;

    @Field(() => PokemonMovesCreateInput, {nullable:false})
    @Type(() => PokemonMovesCreateInput)
    create!: Identity<PokemonMovesCreateInput>;

    @Field(() => PokemonMovesUpdateInput, {nullable:false})
    @Type(() => PokemonMovesUpdateInput)
    update!: Identity<PokemonMovesUpdateInput>;
}
