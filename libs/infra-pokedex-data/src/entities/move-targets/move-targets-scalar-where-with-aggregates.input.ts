import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class MoveTargetsScalarWhereWithAggregatesInput {

    @Field(() => [MoveTargetsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<MoveTargetsScalarWhereWithAggregatesInput>;

    @Field(() => [MoveTargetsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<MoveTargetsScalarWhereWithAggregatesInput>;

    @Field(() => [MoveTargetsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<MoveTargetsScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: Identity<IntWithAggregatesFilter>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    identifier?: Identity<StringWithAggregatesFilter>;
}
