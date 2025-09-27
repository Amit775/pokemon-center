import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Items } from '../items/items.model';
import { ItemFlingEffectsCount } from './item-fling-effects-count.output';

/**
 * @@TypeGraphQL.type(name: "ItemFlingEffect")
 */
@ObjectType({description:'@@TypeGraphQL.type(name: "ItemFlingEffect")'})
export class ItemFlingEffects {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => [Items], {nullable:true})
    items?: Array<Items>;

    @Field(() => ItemFlingEffectsCount, {nullable:false})
    _count?: ItemFlingEffectsCount;
}
