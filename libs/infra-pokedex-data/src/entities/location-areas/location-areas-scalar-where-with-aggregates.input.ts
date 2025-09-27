import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class LocationAreasScalarWhereWithAggregatesInput {

    @Field(() => [LocationAreasScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<LocationAreasScalarWhereWithAggregatesInput>;

    @Field(() => [LocationAreasScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<LocationAreasScalarWhereWithAggregatesInput>;

    @Field(() => [LocationAreasScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<LocationAreasScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    location_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    game_index?: IntWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    identifier?: StringNullableWithAggregatesFilter;
}
