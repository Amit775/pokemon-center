import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class MoveMetaCategoriesScalarWhereWithAggregatesInput {

    @Field(() => [MoveMetaCategoriesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<MoveMetaCategoriesScalarWhereWithAggregatesInput>;

    @Field(() => [MoveMetaCategoriesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<MoveMetaCategoriesScalarWhereWithAggregatesInput>;

    @Field(() => [MoveMetaCategoriesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<MoveMetaCategoriesScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    identifier?: StringWithAggregatesFilter;
}
