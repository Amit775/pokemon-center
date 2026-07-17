import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class LocationAreasScalarWhereWithAggregatesInput {

    @Field(() => [LocationAreasScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<LocationAreasScalarWhereWithAggregatesInput>;

    @Field(() => [LocationAreasScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<LocationAreasScalarWhereWithAggregatesInput>;

    @Field(() => [LocationAreasScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<LocationAreasScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: Identity<IntWithAggregatesFilter>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    location_id?: Identity<IntWithAggregatesFilter>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    game_index?: Identity<IntWithAggregatesFilter>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    identifier?: Identity<StringWithAggregatesFilter>;
}
