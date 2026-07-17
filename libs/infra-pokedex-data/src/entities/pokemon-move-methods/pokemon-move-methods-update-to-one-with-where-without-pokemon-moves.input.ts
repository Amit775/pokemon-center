import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonMoveMethodsWhereInput } from './pokemon-move-methods-where.input';
import { Type } from 'class-transformer';
import { PokemonMoveMethodsUpdateWithoutPokemonMovesInput } from './pokemon-move-methods-update-without-pokemon-moves.input';

@InputType()
export class PokemonMoveMethodsUpdateToOneWithWhereWithoutPokemonMovesInput {

    @Field(() => PokemonMoveMethodsWhereInput, {nullable:true})
    @Type(() => PokemonMoveMethodsWhereInput)
    where?: Identity<PokemonMoveMethodsWhereInput>;

    @Field(() => PokemonMoveMethodsUpdateWithoutPokemonMovesInput, {nullable:false})
    @Type(() => PokemonMoveMethodsUpdateWithoutPokemonMovesInput)
    data!: Identity<PokemonMoveMethodsUpdateWithoutPokemonMovesInput>;
}
