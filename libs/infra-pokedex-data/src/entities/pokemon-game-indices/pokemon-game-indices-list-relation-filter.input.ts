import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonGameIndicesWhereInput } from './pokemon-game-indices-where.input';

@InputType()
export class PokemonGameIndicesListRelationFilter {

    @Field(() => PokemonGameIndicesWhereInput, {nullable:true})
    every?: Identity<PokemonGameIndicesWhereInput>;

    @Field(() => PokemonGameIndicesWhereInput, {nullable:true})
    some?: Identity<PokemonGameIndicesWhereInput>;

    @Field(() => PokemonGameIndicesWhereInput, {nullable:true})
    none?: Identity<PokemonGameIndicesWhereInput>;
}
