import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class MoveMetaStatChangesScalarWhereWithAggregatesInput {

    @Field(() => [MoveMetaStatChangesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<MoveMetaStatChangesScalarWhereWithAggregatesInput>;

    @Field(() => [MoveMetaStatChangesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<MoveMetaStatChangesScalarWhereWithAggregatesInput>;

    @Field(() => [MoveMetaStatChangesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<MoveMetaStatChangesScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    move_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    stat_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    change?: IntWithAggregatesFilter;
}
