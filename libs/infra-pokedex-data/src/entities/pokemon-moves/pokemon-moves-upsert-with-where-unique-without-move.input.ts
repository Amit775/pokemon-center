import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonMovesWhereUniqueInput } from './pokemon-moves-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { PokemonMovesUpdateWithoutMoveInput } from './pokemon-moves-update-without-move.input';
import { PokemonMovesCreateWithoutMoveInput } from './pokemon-moves-create-without-move.input';

@InputType()
export class PokemonMovesUpsertWithWhereUniqueWithoutMoveInput {

    @Field(() => PokemonMovesWhereUniqueInput, {nullable:false})
    @Type(() => PokemonMovesWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonMovesWhereUniqueInput, 'pokemon_id_version_group_id_move_id_pokemon_move_method_id'>;

    @Field(() => PokemonMovesUpdateWithoutMoveInput, {nullable:false})
    @Type(() => PokemonMovesUpdateWithoutMoveInput)
    update!: Identity<PokemonMovesUpdateWithoutMoveInput>;

    @Field(() => PokemonMovesCreateWithoutMoveInput, {nullable:false})
    @Type(() => PokemonMovesCreateWithoutMoveInput)
    create!: Identity<PokemonMovesCreateWithoutMoveInput>;
}
