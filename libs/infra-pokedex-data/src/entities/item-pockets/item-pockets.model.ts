import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { ItemCategories } from '../item-categories/item-categories.model';
import { ItemPocketsCount } from './item-pockets-count.output';
import type { Identity } from 'identity-type';

/**
 * @@TypeGraphQL.type(name: "ItemPocket")
 */
@ObjectType({description:'@@TypeGraphQL.type(name: "ItemPocket")'})
export class ItemPockets {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => [ItemCategories], {nullable:false})
    categories?: Array<ItemCategories>;

    @Field(() => ItemPocketsCount, {nullable:false})
    _count?: Identity<ItemPocketsCount>;
}
