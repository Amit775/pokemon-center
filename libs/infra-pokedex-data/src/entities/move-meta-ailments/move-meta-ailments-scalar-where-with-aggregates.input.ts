import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class MoveMetaAilmentsScalarWhereWithAggregatesInput {

    @Field(() => [MoveMetaAilmentsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<MoveMetaAilmentsScalarWhereWithAggregatesInput>;

    @Field(() => [MoveMetaAilmentsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<MoveMetaAilmentsScalarWhereWithAggregatesInput>;

    @Field(() => [MoveMetaAilmentsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<MoveMetaAilmentsScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: Identity<IntWithAggregatesFilter>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    identifier?: Identity<StringWithAggregatesFilter>;
}
