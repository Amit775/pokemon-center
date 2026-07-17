import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonMoveMethodsUpdateWithoutPokemonMovesInput } from './pokemon-move-methods-update-without-pokemon-moves.input';
import { Type } from 'class-transformer';
import { PokemonMoveMethodsCreateWithoutPokemonMovesInput } from './pokemon-move-methods-create-without-pokemon-moves.input';
import { PokemonMoveMethodsWhereInput } from './pokemon-move-methods-where.input';

@InputType()
export class PokemonMoveMethodsUpsertWithoutPokemonMovesInput {

    @Field(() => PokemonMoveMethodsUpdateWithoutPokemonMovesInput, {nullable:false})
    @Type(() => PokemonMoveMethodsUpdateWithoutPokemonMovesInput)
    update!: Identity<PokemonMoveMethodsUpdateWithoutPokemonMovesInput>;

    @Field(() => PokemonMoveMethodsCreateWithoutPokemonMovesInput, {nullable:false})
    @Type(() => PokemonMoveMethodsCreateWithoutPokemonMovesInput)
    create!: Identity<PokemonMoveMethodsCreateWithoutPokemonMovesInput>;

    @Field(() => PokemonMoveMethodsWhereInput, {nullable:true})
    @Type(() => PokemonMoveMethodsWhereInput)
    where?: Identity<PokemonMoveMethodsWhereInput>;
}
