import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';

@InputType()
export class TypesScalarWhereWithAggregatesInput {

    @Field(() => [TypesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<TypesScalarWhereWithAggregatesInput>;

    @Field(() => [TypesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<TypesScalarWhereWithAggregatesInput>;

    @Field(() => [TypesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<TypesScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    identifier?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    generation_id?: IntWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    damage_class_id?: IntNullableWithAggregatesFilter;
}
