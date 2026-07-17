import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { ItemFlagMap } from '../item-flag-map/item-flag-map.model';
import { ItemFlagsCount } from './item-flags-count.output';
import type { Identity } from 'identity-type';

/**
 * @@TypeGraphQL.type(name: "ItemFlag")
 */
@ObjectType({description:'@@TypeGraphQL.type(name: "ItemFlag")'})
export class ItemFlags {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => [ItemFlagMap], {nullable:false})
    flagMap?: Array<ItemFlagMap>;

    @Field(() => ItemFlagsCount, {nullable:false})
    _count?: Identity<ItemFlagsCount>;
}
