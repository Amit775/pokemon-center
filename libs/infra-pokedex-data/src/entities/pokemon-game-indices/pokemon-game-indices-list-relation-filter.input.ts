import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonGameIndicesWhereInput } from './pokemon-game-indices-where.input';

@InputType()
export class PokemonGameIndicesListRelationFilter {

    @Field(() => PokemonGameIndicesWhereInput, {nullable:true})
    every?: PokemonGameIndicesWhereInput;

    @Field(() => PokemonGameIndicesWhereInput, {nullable:true})
    some?: PokemonGameIndicesWhereInput;

    @Field(() => PokemonGameIndicesWhereInput, {nullable:true})
    none?: PokemonGameIndicesWhereInput;
}
