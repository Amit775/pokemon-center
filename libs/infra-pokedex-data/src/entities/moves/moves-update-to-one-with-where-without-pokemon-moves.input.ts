import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MovesWhereInput } from './moves-where.input';
import { Type } from 'class-transformer';
import { MovesUpdateWithoutPokemonMovesInput } from './moves-update-without-pokemon-moves.input';

@InputType()
export class MovesUpdateToOneWithWhereWithoutPokemonMovesInput {

    @Field(() => MovesWhereInput, {nullable:true})
    @Type(() => MovesWhereInput)
    where?: Identity<MovesWhereInput>;

    @Field(() => MovesUpdateWithoutPokemonMovesInput, {nullable:false})
    @Type(() => MovesUpdateWithoutPokemonMovesInput)
    data!: Identity<MovesUpdateWithoutPokemonMovesInput>;
}
