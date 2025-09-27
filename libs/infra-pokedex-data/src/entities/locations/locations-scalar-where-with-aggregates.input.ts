import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class LocationsScalarWhereWithAggregatesInput {

    @Field(() => [LocationsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<LocationsScalarWhereWithAggregatesInput>;

    @Field(() => [LocationsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<LocationsScalarWhereWithAggregatesInput>;

    @Field(() => [LocationsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<LocationsScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    region_id?: IntNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    identifier?: StringWithAggregatesFilter;
}
