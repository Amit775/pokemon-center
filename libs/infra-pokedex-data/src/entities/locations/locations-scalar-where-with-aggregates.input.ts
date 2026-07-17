import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
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
    id?: Identity<IntWithAggregatesFilter>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    region_id?: Identity<IntWithAggregatesFilter>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    identifier?: Identity<StringWithAggregatesFilter>;
}
