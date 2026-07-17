import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { RegionsScalarRelationFilter } from '../regions/regions-scalar-relation-filter.input';
import { LocationAreasListRelationFilter } from '../location-areas/location-areas-list-relation-filter.input';
import { LocationGameIndicesListRelationFilter } from '../location-game-indices/location-game-indices-list-relation-filter.input';
import { PokemonEvolutionListRelationFilter } from '../pokemon-evolution/pokemon-evolution-list-relation-filter.input';

@InputType()
export class LocationsWhereInput {

    @Field(() => [LocationsWhereInput], {nullable:true})
    AND?: Array<LocationsWhereInput>;

    @Field(() => [LocationsWhereInput], {nullable:true})
    OR?: Array<LocationsWhereInput>;

    @Field(() => [LocationsWhereInput], {nullable:true})
    NOT?: Array<LocationsWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    region_id?: Identity<IntFilter>;

    @Field(() => StringFilter, {nullable:true})
    identifier?: Identity<StringFilter>;

    @Field(() => RegionsScalarRelationFilter, {nullable:true})
    region?: Identity<RegionsScalarRelationFilter>;

    @Field(() => LocationAreasListRelationFilter, {nullable:true})
    areas?: Identity<LocationAreasListRelationFilter>;

    @Field(() => LocationGameIndicesListRelationFilter, {nullable:true})
    gameIndices?: Identity<LocationGameIndicesListRelationFilter>;

    @Field(() => PokemonEvolutionListRelationFilter, {nullable:true})
    evolution?: Identity<PokemonEvolutionListRelationFilter>;
}
