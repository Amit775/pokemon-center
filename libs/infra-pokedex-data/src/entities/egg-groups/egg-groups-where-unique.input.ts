import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { EggGroupsWhereInput } from './egg-groups-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { PokemonEggGroupsListRelationFilter } from '../pokemon-egg-groups/pokemon-egg-groups-list-relation-filter.input';

@InputType()
export class EggGroupsWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [EggGroupsWhereInput], {nullable:true})
    AND?: Array<EggGroupsWhereInput>;

    @Field(() => [EggGroupsWhereInput], {nullable:true})
    OR?: Array<EggGroupsWhereInput>;

    @Field(() => [EggGroupsWhereInput], {nullable:true})
    NOT?: Array<EggGroupsWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    identifier?: StringFilter;

    @Field(() => PokemonEggGroupsListRelationFilter, {nullable:true})
    species?: PokemonEggGroupsListRelationFilter;
}
