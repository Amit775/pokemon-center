import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class TypesScalarWhereWithAggregatesInput {

    @Field(() => [TypesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<TypesScalarWhereWithAggregatesInput>;

    @Field(() => [TypesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<TypesScalarWhereWithAggregatesInput>;

    @Field(() => [TypesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<TypesScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: Identity<IntWithAggregatesFilter>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    identifier?: Identity<StringWithAggregatesFilter>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    generation_id?: Identity<IntWithAggregatesFilter>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    damage_class_id?: Identity<IntWithAggregatesFilter>;
}
