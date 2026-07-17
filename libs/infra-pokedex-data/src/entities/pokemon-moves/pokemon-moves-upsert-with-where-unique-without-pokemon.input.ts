import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PokemonMovesWhereUniqueInput } from './pokemon-moves-where-unique.input';
import { Type } from 'class-transformer';
import { PokemonMovesUpdateWithoutPokemonInput } from './pokemon-moves-update-without-pokemon.input';
import { PokemonMovesCreateWithoutPokemonInput } from './pokemon-moves-create-without-pokemon.input';

@InputType()
export class PokemonMovesUpsertWithWhereUniqueWithoutPokemonInput {

    @Field(() => PokemonMovesWhereUniqueInput, {nullable:false})
    @Type(() => PokemonMovesWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonMovesWhereUniqueInput, 'pokemon_id_version_group_id_move_id_pokemon_move_method_id'>;

    @Field(() => PokemonMovesUpdateWithoutPokemonInput, {nullable:false})
    @Type(() => PokemonMovesUpdateWithoutPokemonInput)
    update!: PokemonMovesUpdateWithoutPokemonInput;

    @Field(() => PokemonMovesCreateWithoutPokemonInput, {nullable:false})
    @Type(() => PokemonMovesCreateWithoutPokemonInput)
    create!: PokemonMovesCreateWithoutPokemonInput;
}
