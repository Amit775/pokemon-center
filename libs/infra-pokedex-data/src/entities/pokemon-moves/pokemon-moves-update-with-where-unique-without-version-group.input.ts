import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PokemonMovesWhereUniqueInput } from './pokemon-moves-where-unique.input';
import { Type } from 'class-transformer';
import { PokemonMovesUpdateWithoutVersionGroupInput } from './pokemon-moves-update-without-version-group.input';

@InputType()
export class PokemonMovesUpdateWithWhereUniqueWithoutVersionGroupInput {

    @Field(() => PokemonMovesWhereUniqueInput, {nullable:false})
    @Type(() => PokemonMovesWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonMovesWhereUniqueInput, 'pokemon_id_version_group_id_move_id_pokemon_move_method_id'>;

    @Field(() => PokemonMovesUpdateWithoutVersionGroupInput, {nullable:false})
    @Type(() => PokemonMovesUpdateWithoutVersionGroupInput)
    data!: PokemonMovesUpdateWithoutVersionGroupInput;
}
