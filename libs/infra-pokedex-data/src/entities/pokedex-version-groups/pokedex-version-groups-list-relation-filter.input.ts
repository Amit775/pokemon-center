import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokedexVersionGroupsWhereInput } from './pokedex-version-groups-where.input';

@InputType()
export class PokedexVersionGroupsListRelationFilter {

    @Field(() => PokedexVersionGroupsWhereInput, {nullable:true})
    every?: Identity<PokedexVersionGroupsWhereInput>;

    @Field(() => PokedexVersionGroupsWhereInput, {nullable:true})
    some?: Identity<PokedexVersionGroupsWhereInput>;

    @Field(() => PokedexVersionGroupsWhereInput, {nullable:true})
    none?: Identity<PokedexVersionGroupsWhereInput>;
}
