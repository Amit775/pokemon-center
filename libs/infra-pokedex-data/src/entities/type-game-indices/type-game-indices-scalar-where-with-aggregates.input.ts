import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class TypeGameIndicesScalarWhereWithAggregatesInput {

    @Field(() => [TypeGameIndicesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<TypeGameIndicesScalarWhereWithAggregatesInput>;

    @Field(() => [TypeGameIndicesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<TypeGameIndicesScalarWhereWithAggregatesInput>;

    @Field(() => [TypeGameIndicesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<TypeGameIndicesScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    type_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    generation_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    game_index?: IntWithAggregatesFilter;
}
