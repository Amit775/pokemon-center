import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonMoveMethodsWhereInput } from './pokemon-move-methods-where.input';

@InputType()
export class PokemonMoveMethodsScalarRelationFilter {

    @Field(() => PokemonMoveMethodsWhereInput, {nullable:true})
    is?: PokemonMoveMethodsWhereInput;

    @Field(() => PokemonMoveMethodsWhereInput, {nullable:true})
    isNot?: PokemonMoveMethodsWhereInput;
}
