import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonMovesWhereUniqueInput } from './pokemon-moves-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { PokemonMovesUpdateWithoutMoveMethodInput } from './pokemon-moves-update-without-move-method.input';
import { PokemonMovesCreateWithoutMoveMethodInput } from './pokemon-moves-create-without-move-method.input';

@InputType()
export class PokemonMovesUpsertWithWhereUniqueWithoutMoveMethodInput {

    @Field(() => PokemonMovesWhereUniqueInput, {nullable:false})
    @Type(() => PokemonMovesWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonMovesWhereUniqueInput, 'pokemon_id_version_group_id_move_id_pokemon_move_method_id'>;

    @Field(() => PokemonMovesUpdateWithoutMoveMethodInput, {nullable:false})
    @Type(() => PokemonMovesUpdateWithoutMoveMethodInput)
    update!: Identity<PokemonMovesUpdateWithoutMoveMethodInput>;

    @Field(() => PokemonMovesCreateWithoutMoveMethodInput, {nullable:false})
    @Type(() => PokemonMovesCreateWithoutMoveMethodInput)
    create!: Identity<PokemonMovesCreateWithoutMoveMethodInput>;
}
