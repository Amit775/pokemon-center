import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonMovesWhereInput } from './pokemon-moves-where.input';

@InputType()
export class PokemonMovesListRelationFilter {

    @Field(() => PokemonMovesWhereInput, {nullable:true})
    every?: Identity<PokemonMovesWhereInput>;

    @Field(() => PokemonMovesWhereInput, {nullable:true})
    some?: Identity<PokemonMovesWhereInput>;

    @Field(() => PokemonMovesWhereInput, {nullable:true})
    none?: Identity<PokemonMovesWhereInput>;
}
