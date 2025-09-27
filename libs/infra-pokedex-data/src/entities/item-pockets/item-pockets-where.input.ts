import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { ItemCategoriesListRelationFilter } from '../item-categories/item-categories-list-relation-filter.input';

@InputType()
export class ItemPocketsWhereInput {

    @Field(() => [ItemPocketsWhereInput], {nullable:true})
    AND?: Array<ItemPocketsWhereInput>;

    @Field(() => [ItemPocketsWhereInput], {nullable:true})
    OR?: Array<ItemPocketsWhereInput>;

    @Field(() => [ItemPocketsWhereInput], {nullable:true})
    NOT?: Array<ItemPocketsWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    identifier?: StringFilter;

    @Field(() => ItemCategoriesListRelationFilter, {nullable:true})
    categories?: ItemCategoriesListRelationFilter;
}
