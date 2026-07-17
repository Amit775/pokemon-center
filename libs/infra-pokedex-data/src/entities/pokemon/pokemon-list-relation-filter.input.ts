import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonWhereInput } from './pokemon-where.input';

@InputType()
export class PokemonListRelationFilter {

    @Field(() => PokemonWhereInput, {nullable:true})
    every?: Identity<PokemonWhereInput>;

    @Field(() => PokemonWhereInput, {nullable:true})
    some?: Identity<PokemonWhereInput>;

    @Field(() => PokemonWhereInput, {nullable:true})
    none?: Identity<PokemonWhereInput>;
}
