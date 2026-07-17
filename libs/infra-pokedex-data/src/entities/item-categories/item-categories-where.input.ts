import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { ItemPocketsScalarRelationFilter } from '../item-pockets/item-pockets-scalar-relation-filter.input';
import { ItemsListRelationFilter } from '../items/items-list-relation-filter.input';

@InputType()
export class ItemCategoriesWhereInput {

    @Field(() => [ItemCategoriesWhereInput], {nullable:true})
    AND?: Array<ItemCategoriesWhereInput>;

    @Field(() => [ItemCategoriesWhereInput], {nullable:true})
    OR?: Array<ItemCategoriesWhereInput>;

    @Field(() => [ItemCategoriesWhereInput], {nullable:true})
    NOT?: Array<ItemCategoriesWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    pocket_id?: Identity<IntFilter>;

    @Field(() => StringFilter, {nullable:true})
    identifier?: Identity<StringFilter>;

    @Field(() => ItemPocketsScalarRelationFilter, {nullable:true})
    pocket?: Identity<ItemPocketsScalarRelationFilter>;

    @Field(() => ItemsListRelationFilter, {nullable:true})
    items?: Identity<ItemsListRelationFilter>;
}
