import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { IntFilter } from '../prisma/int-filter.input';
import { ItemsScalarRelationFilter } from '../items/items-scalar-relation-filter.input';
import { ItemFlagsScalarRelationFilter } from '../item-flags/item-flags-scalar-relation-filter.input';

@InputType()
export class ItemFlagMapWhereInput {

    @Field(() => [ItemFlagMapWhereInput], {nullable:true})
    AND?: Array<ItemFlagMapWhereInput>;

    @Field(() => [ItemFlagMapWhereInput], {nullable:true})
    OR?: Array<ItemFlagMapWhereInput>;

    @Field(() => [ItemFlagMapWhereInput], {nullable:true})
    NOT?: Array<ItemFlagMapWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    item_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    item_flag_id?: Identity<IntFilter>;

    @Field(() => ItemsScalarRelationFilter, {nullable:true})
    item?: Identity<ItemsScalarRelationFilter>;

    @Field(() => ItemFlagsScalarRelationFilter, {nullable:true})
    flag?: Identity<ItemFlagsScalarRelationFilter>;
}
