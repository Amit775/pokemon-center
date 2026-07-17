import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class TypeEfficacyScalarWhereWithAggregatesInput {

    @Field(() => [TypeEfficacyScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<TypeEfficacyScalarWhereWithAggregatesInput>;

    @Field(() => [TypeEfficacyScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<TypeEfficacyScalarWhereWithAggregatesInput>;

    @Field(() => [TypeEfficacyScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<TypeEfficacyScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    damage_type_id?: Identity<IntWithAggregatesFilter>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    target_type_id?: Identity<IntWithAggregatesFilter>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    damage_factor?: Identity<IntWithAggregatesFilter>;
}
