import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class LocationGameIndicesScalarWhereWithAggregatesInput {

    @Field(() => [LocationGameIndicesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<LocationGameIndicesScalarWhereWithAggregatesInput>;

    @Field(() => [LocationGameIndicesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<LocationGameIndicesScalarWhereWithAggregatesInput>;

    @Field(() => [LocationGameIndicesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<LocationGameIndicesScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    location_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    generation_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    game_index?: IntWithAggregatesFilter;
}
