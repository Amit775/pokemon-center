import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonEggGroupsWhereInput } from './pokemon-egg-groups-where.input';

@InputType()
export class PokemonEggGroupsListRelationFilter {

    @Field(() => PokemonEggGroupsWhereInput, {nullable:true})
    every?: Identity<PokemonEggGroupsWhereInput>;

    @Field(() => PokemonEggGroupsWhereInput, {nullable:true})
    some?: Identity<PokemonEggGroupsWhereInput>;

    @Field(() => PokemonEggGroupsWhereInput, {nullable:true})
    none?: Identity<PokemonEggGroupsWhereInput>;
}
