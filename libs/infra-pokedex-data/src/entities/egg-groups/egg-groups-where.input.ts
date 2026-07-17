import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { PokemonEggGroupsListRelationFilter } from '../pokemon-egg-groups/pokemon-egg-groups-list-relation-filter.input';

@InputType()
export class EggGroupsWhereInput {

    @Field(() => [EggGroupsWhereInput], {nullable:true})
    AND?: Array<EggGroupsWhereInput>;

    @Field(() => [EggGroupsWhereInput], {nullable:true})
    OR?: Array<EggGroupsWhereInput>;

    @Field(() => [EggGroupsWhereInput], {nullable:true})
    NOT?: Array<EggGroupsWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: Identity<IntFilter>;

    @Field(() => StringFilter, {nullable:true})
    identifier?: Identity<StringFilter>;

    @Field(() => PokemonEggGroupsListRelationFilter, {nullable:true})
    species?: Identity<PokemonEggGroupsListRelationFilter>;
}
