import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class MoveBattleStylesScalarWhereWithAggregatesInput {

    @Field(() => [MoveBattleStylesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<MoveBattleStylesScalarWhereWithAggregatesInput>;

    @Field(() => [MoveBattleStylesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<MoveBattleStylesScalarWhereWithAggregatesInput>;

    @Field(() => [MoveBattleStylesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<MoveBattleStylesScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: Identity<IntWithAggregatesFilter>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    identifier?: Identity<StringWithAggregatesFilter>;
}
