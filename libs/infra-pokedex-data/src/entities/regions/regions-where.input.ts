import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { GenerationsListRelationFilter } from '../generations/generations-list-relation-filter.input';
import { LocationsListRelationFilter } from '../locations/locations-list-relation-filter.input';
import { PokedexesListRelationFilter } from '../pokedexes/pokedexes-list-relation-filter.input';
import { VersionGroupRegionsListRelationFilter } from '../version-group-regions/version-group-regions-list-relation-filter.input';

@InputType()
export class RegionsWhereInput {

    @Field(() => [RegionsWhereInput], {nullable:true})
    AND?: Array<RegionsWhereInput>;

    @Field(() => [RegionsWhereInput], {nullable:true})
    OR?: Array<RegionsWhereInput>;

    @Field(() => [RegionsWhereInput], {nullable:true})
    NOT?: Array<RegionsWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: Identity<IntFilter>;

    @Field(() => StringFilter, {nullable:true})
    identifier?: Identity<StringFilter>;

    @Field(() => GenerationsListRelationFilter, {nullable:true})
    generations?: Identity<GenerationsListRelationFilter>;

    @Field(() => LocationsListRelationFilter, {nullable:true})
    locations?: Identity<LocationsListRelationFilter>;

    @Field(() => PokedexesListRelationFilter, {nullable:true})
    pokedexes?: Identity<PokedexesListRelationFilter>;

    @Field(() => VersionGroupRegionsListRelationFilter, {nullable:true})
    versionGroups?: Identity<VersionGroupRegionsListRelationFilter>;
}
