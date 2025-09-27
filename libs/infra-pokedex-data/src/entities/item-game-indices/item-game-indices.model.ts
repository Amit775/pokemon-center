import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Items } from '../items/items.model';
import { Generations } from '../generations/generations.model';

/**
 * @@TypeGraphQL.type(name: "ItemGameIndex")
 */
@ObjectType({description:'@@TypeGraphQL.type(name: "ItemGameIndex")'})
export class ItemGameIndices {

    @Field(() => Int, {nullable:false})
    item_id!: number;

    @Field(() => Int, {nullable:false})
    generation_id!: number;

    @Field(() => Int, {nullable:false})
    game_index!: number;

    @Field(() => Items, {nullable:false})
    item?: Items;

    @Field(() => Generations, {nullable:false})
    generation?: Generations;
}
