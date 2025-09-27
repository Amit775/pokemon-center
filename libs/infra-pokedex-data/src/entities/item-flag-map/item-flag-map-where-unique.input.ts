import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ItemFlagMapWhereInput } from './item-flag-map-where.input';
import { IntFilter } from '../prisma/int-filter.input';
import { ItemsScalarRelationFilter } from '../items/items-scalar-relation-filter.input';
import { ItemFlagsScalarRelationFilter } from '../item-flags/item-flags-scalar-relation-filter.input';

@InputType()
export class ItemFlagMapWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    item_id?: number;

    @Field(() => [ItemFlagMapWhereInput], {nullable:true})
    AND?: Array<ItemFlagMapWhereInput>;

    @Field(() => [ItemFlagMapWhereInput], {nullable:true})
    OR?: Array<ItemFlagMapWhereInput>;

    @Field(() => [ItemFlagMapWhereInput], {nullable:true})
    NOT?: Array<ItemFlagMapWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    item_flag_id?: IntFilter;

    @Field(() => ItemsScalarRelationFilter, {nullable:true})
    item?: ItemsScalarRelationFilter;

    @Field(() => ItemFlagsScalarRelationFilter, {nullable:true})
    flag?: ItemFlagsScalarRelationFilter;
}
