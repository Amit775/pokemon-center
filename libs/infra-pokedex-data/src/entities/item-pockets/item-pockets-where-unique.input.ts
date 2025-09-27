import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ItemPocketsWhereInput } from './item-pockets-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { ItemCategoriesListRelationFilter } from '../item-categories/item-categories-list-relation-filter.input';

@InputType()
export class ItemPocketsWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [ItemPocketsWhereInput], {nullable:true})
    AND?: Array<ItemPocketsWhereInput>;

    @Field(() => [ItemPocketsWhereInput], {nullable:true})
    OR?: Array<ItemPocketsWhereInput>;

    @Field(() => [ItemPocketsWhereInput], {nullable:true})
    NOT?: Array<ItemPocketsWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    identifier?: StringFilter;

    @Field(() => ItemCategoriesListRelationFilter, {nullable:true})
    categories?: ItemCategoriesListRelationFilter;
}
