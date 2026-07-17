import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class ItemsScalarWhereInput {

    @Field(() => [ItemsScalarWhereInput], {nullable:true})
    AND?: Array<ItemsScalarWhereInput>;

    @Field(() => [ItemsScalarWhereInput], {nullable:true})
    OR?: Array<ItemsScalarWhereInput>;

    @Field(() => [ItemsScalarWhereInput], {nullable:true})
    NOT?: Array<ItemsScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: Identity<IntFilter>;

    @Field(() => StringFilter, {nullable:true})
    identifier?: Identity<StringFilter>;

    @Field(() => IntFilter, {nullable:true})
    category_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    cost?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    fling_power?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    fling_effect_id?: Identity<IntFilter>;
}
