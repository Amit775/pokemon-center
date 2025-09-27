import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonEggGroupsWhereInput } from './pokemon-egg-groups-where.input';

@InputType()
export class PokemonEggGroupsListRelationFilter {

    @Field(() => PokemonEggGroupsWhereInput, {nullable:true})
    every?: PokemonEggGroupsWhereInput;

    @Field(() => PokemonEggGroupsWhereInput, {nullable:true})
    some?: PokemonEggGroupsWhereInput;

    @Field(() => PokemonEggGroupsWhereInput, {nullable:true})
    none?: PokemonEggGroupsWhereInput;
}
