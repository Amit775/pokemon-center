import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { LocationsWhereInput } from './locations-where.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { RegionsNullableScalarRelationFilter } from '../regions/regions-nullable-scalar-relation-filter.input';
import { LocationAreasListRelationFilter } from '../location-areas/location-areas-list-relation-filter.input';
import { LocationGameIndicesListRelationFilter } from '../location-game-indices/location-game-indices-list-relation-filter.input';
import { PokemonEvolutionListRelationFilter } from '../pokemon-evolution/pokemon-evolution-list-relation-filter.input';

@InputType()
export class LocationsWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [LocationsWhereInput], {nullable:true})
    AND?: Array<LocationsWhereInput>;

    @Field(() => [LocationsWhereInput], {nullable:true})
    OR?: Array<LocationsWhereInput>;

    @Field(() => [LocationsWhereInput], {nullable:true})
    NOT?: Array<LocationsWhereInput>;

    @Field(() => IntNullableFilter, {nullable:true})
    region_id?: IntNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    identifier?: StringFilter;

    @Field(() => RegionsNullableScalarRelationFilter, {nullable:true})
    region?: RegionsNullableScalarRelationFilter;

    @Field(() => LocationAreasListRelationFilter, {nullable:true})
    areas?: LocationAreasListRelationFilter;

    @Field(() => LocationGameIndicesListRelationFilter, {nullable:true})
    gameIndices?: LocationGameIndicesListRelationFilter;

    @Field(() => PokemonEvolutionListRelationFilter, {nullable:true})
    evolution?: PokemonEvolutionListRelationFilter;
}
