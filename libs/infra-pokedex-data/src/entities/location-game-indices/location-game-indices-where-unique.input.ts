import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LocationGameIndicesLocation_idGeneration_idCompoundUniqueInput } from './location-game-indices-location-id-generation-id-compound-unique.input';
import { LocationGameIndicesWhereInput } from './location-game-indices-where.input';
import { IntFilter } from '../prisma/int-filter.input';
import { LocationsScalarRelationFilter } from '../locations/locations-scalar-relation-filter.input';
import { GenerationsScalarRelationFilter } from '../generations/generations-scalar-relation-filter.input';

@InputType()
export class LocationGameIndicesWhereUniqueInput {

    @Field(() => LocationGameIndicesLocation_idGeneration_idCompoundUniqueInput, {nullable:true})
    location_id_generation_id?: LocationGameIndicesLocation_idGeneration_idCompoundUniqueInput;

    @Field(() => [LocationGameIndicesWhereInput], {nullable:true})
    AND?: Array<LocationGameIndicesWhereInput>;

    @Field(() => [LocationGameIndicesWhereInput], {nullable:true})
    OR?: Array<LocationGameIndicesWhereInput>;

    @Field(() => [LocationGameIndicesWhereInput], {nullable:true})
    NOT?: Array<LocationGameIndicesWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    location_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    generation_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    game_index?: IntFilter;

    @Field(() => LocationsScalarRelationFilter, {nullable:true})
    location?: LocationsScalarRelationFilter;

    @Field(() => GenerationsScalarRelationFilter, {nullable:true})
    generation?: GenerationsScalarRelationFilter;
}
