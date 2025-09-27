import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonMovesWhereInput } from './pokemon-moves-where.input';

@InputType()
export class PokemonMovesListRelationFilter {

    @Field(() => PokemonMovesWhereInput, {nullable:true})
    every?: PokemonMovesWhereInput;

    @Field(() => PokemonMovesWhereInput, {nullable:true})
    some?: PokemonMovesWhereInput;

    @Field(() => PokemonMovesWhereInput, {nullable:true})
    none?: PokemonMovesWhereInput;
}
