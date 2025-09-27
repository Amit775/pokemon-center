import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ItemPockets } from '../item-pockets/item-pockets.model';
import { Items } from '../items/items.model';
import { ItemCategoriesCount } from './item-categories-count.output';

/**
 * @@TypeGraphQL.type(name: "ItemCategory")
 */
@ObjectType({description:'@@TypeGraphQL.type(name: "ItemCategory")'})
export class ItemCategories {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    pocket_id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => ItemPockets, {nullable:false})
    pocket?: ItemPockets;

    @Field(() => [Items], {nullable:true})
    items?: Array<Items>;

    @Field(() => ItemCategoriesCount, {nullable:false})
    _count?: ItemCategoriesCount;
}
