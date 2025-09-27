import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ItemFlingEffectsWhereInput } from './item-fling-effects-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { ItemsListRelationFilter } from '../items/items-list-relation-filter.input';

@InputType()
export class ItemFlingEffectsWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [ItemFlingEffectsWhereInput], {nullable:true})
    AND?: Array<ItemFlingEffectsWhereInput>;

    @Field(() => [ItemFlingEffectsWhereInput], {nullable:true})
    OR?: Array<ItemFlingEffectsWhereInput>;

    @Field(() => [ItemFlingEffectsWhereInput], {nullable:true})
    NOT?: Array<ItemFlingEffectsWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    identifier?: StringFilter;

    @Field(() => ItemsListRelationFilter, {nullable:true})
    items?: ItemsListRelationFilter;
}
