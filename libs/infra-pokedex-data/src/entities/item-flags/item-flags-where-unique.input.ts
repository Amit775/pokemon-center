import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ItemFlagsWhereInput } from './item-flags-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { ItemFlagMapListRelationFilter } from '../item-flag-map/item-flag-map-list-relation-filter.input';

@InputType()
export class ItemFlagsWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [ItemFlagsWhereInput], {nullable:true})
    AND?: Array<ItemFlagsWhereInput>;

    @Field(() => [ItemFlagsWhereInput], {nullable:true})
    OR?: Array<ItemFlagsWhereInput>;

    @Field(() => [ItemFlagsWhereInput], {nullable:true})
    NOT?: Array<ItemFlagsWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    identifier?: StringFilter;

    @Field(() => ItemFlagMapListRelationFilter, {nullable:true})
    flagMap?: ItemFlagMapListRelationFilter;
}
