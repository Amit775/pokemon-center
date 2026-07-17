import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonMovesUpdateInput } from './pokemon-moves-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonMovesWhereUniqueInput } from './pokemon-moves-where-unique.input';

@ArgsType()
export class UpdateOnePokemonMovesArgs {

    @Field(() => PokemonMovesUpdateInput, {nullable:false})
    @Type(() => PokemonMovesUpdateInput)
    data!: Identity<PokemonMovesUpdateInput>;

    @Field(() => PokemonMovesWhereUniqueInput, {nullable:false})
    @Type(() => PokemonMovesWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonMovesWhereUniqueInput, 'pokemon_id_version_group_id_move_id_pokemon_move_method_id'>;
}
