import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonMoveMethodsWhereInput } from './pokemon-move-methods-where.input';

@InputType()
export class PokemonMoveMethodsScalarRelationFilter {

    @Field(() => PokemonMoveMethodsWhereInput, {nullable:true})
    is?: Identity<PokemonMoveMethodsWhereInput>;

    @Field(() => PokemonMoveMethodsWhereInput, {nullable:true})
    isNot?: Identity<PokemonMoveMethodsWhereInput>;
}
