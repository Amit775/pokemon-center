import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonAbilitiesWhereInput } from './pokemon-abilities-where.input';

@InputType()
export class PokemonAbilitiesListRelationFilter {

    @Field(() => PokemonAbilitiesWhereInput, {nullable:true})
    every?: Identity<PokemonAbilitiesWhereInput>;

    @Field(() => PokemonAbilitiesWhereInput, {nullable:true})
    some?: Identity<PokemonAbilitiesWhereInput>;

    @Field(() => PokemonAbilitiesWhereInput, {nullable:true})
    none?: Identity<PokemonAbilitiesWhereInput>;
}
