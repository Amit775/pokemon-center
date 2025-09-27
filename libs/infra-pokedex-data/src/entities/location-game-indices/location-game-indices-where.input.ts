import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
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
