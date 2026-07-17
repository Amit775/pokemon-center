import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { IntFilter } from '../prisma/int-filter.input';
import { LocationsScalarRelationFilter } from '../locations/locations-scalar-relation-filter.input';
import { GenerationsScalarRelationFilter } from '../generations/generations-scalar-relation-filter.input';

@InputType()
export class LocationGameIndicesWhereInput {

    @Field(() => [LocationGameIndicesWhereInput], {nullable:true})
    AND?: Array<LocationGameIndicesWhereInput>;

    @Field(() => [LocationGameIndicesWhereInput], {nullable:true})
    OR?: Array<LocationGameIndicesWhereInput>;

    @Field(() => [LocationGameIndicesWhereInput], {nullable:true})
    NOT?: Array<LocationGameIndicesWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    location_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    generation_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    game_index?: Identity<IntFilter>;

    @Field(() => LocationsScalarRelationFilter, {nullable:true})
    location?: Identity<LocationsScalarRelationFilter>;

    @Field(() => GenerationsScalarRelationFilter, {nullable:true})
    generation?: Identity<GenerationsScalarRelationFilter>;
}
