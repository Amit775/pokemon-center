import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Items } from '../items/items.model';
import { ItemFlags } from '../item-flags/item-flags.model';

/**
 * @@TypeGraphQL.type(name: "ItemFlagMap")
 */
@ObjectType({description:'@@TypeGraphQL.type(name: "ItemFlagMap")'})
export class ItemFlagMap {

    @Field(() => ID, {nullable:false})
    item_id!: number;

    @Field(() => Int, {nullable:false})
    item_flag_id!: number;

    @Field(() => Items, {nullable:false})
    item?: Items;

    @Field(() => ItemFlags, {nullable:false})
    flag?: ItemFlags;
}
