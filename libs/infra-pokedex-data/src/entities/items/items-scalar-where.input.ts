import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';

@InputType()
export class ItemsScalarWhereInput {

    @Field(() => [ItemsScalarWhereInput], {nullable:true})
    AND?: Array<ItemsScalarWhereInput>;

    @Field(() => [ItemsScalarWhereInput], {nullable:true})
    OR?: Array<ItemsScalarWhereInput>;

    @Field(() => [ItemsScalarWhereInput], {nullable:true})
    NOT?: Array<ItemsScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    identifier?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    category_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    cost?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    fling_power?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    fling_effect_id?: IntNullableFilter;
}
