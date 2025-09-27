import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { ItemsListRelationFilter } from '../items/items-list-relation-filter.input';

@InputType()
export class ItemFlingEffectsWhereInput {

    @Field(() => [ItemFlingEffectsWhereInput], {nullable:true})
    AND?: Array<ItemFlingEffectsWhereInput>;

    @Field(() => [ItemFlingEffectsWhereInput], {nullable:true})
    OR?: Array<ItemFlingEffectsWhereInput>;

    @Field(() => [ItemFlingEffectsWhereInput], {nullable:true})
    NOT?: Array<ItemFlingEffectsWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    identifier?: StringFilter;

    @Field(() => ItemsListRelationFilter, {nullable:true})
    items?: ItemsListRelationFilter;
}
