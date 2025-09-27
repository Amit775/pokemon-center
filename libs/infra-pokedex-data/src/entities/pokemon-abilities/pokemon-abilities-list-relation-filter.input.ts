import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonAbilitiesWhereInput } from './pokemon-abilities-where.input';

@InputType()
export class PokemonAbilitiesListRelationFilter {

    @Field(() => PokemonAbilitiesWhereInput, {nullable:true})
    every?: PokemonAbilitiesWhereInput;

    @Field(() => PokemonAbilitiesWhereInput, {nullable:true})
    some?: PokemonAbilitiesWhereInput;

    @Field(() => PokemonAbilitiesWhereInput, {nullable:true})
    none?: PokemonAbilitiesWhereInput;
}
