import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonWhereInput } from './pokemon-where.input';

@InputType()
export class PokemonListRelationFilter {

    @Field(() => PokemonWhereInput, {nullable:true})
    every?: PokemonWhereInput;

    @Field(() => PokemonWhereInput, {nullable:true})
    some?: PokemonWhereInput;

    @Field(() => PokemonWhereInput, {nullable:true})
    none?: PokemonWhereInput;
}
