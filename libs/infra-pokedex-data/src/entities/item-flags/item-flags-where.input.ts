import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { ItemFlagMapListRelationFilter } from '../item-flag-map/item-flag-map-list-relation-filter.input';

@InputType()
export class ItemFlagsWhereInput {

    @Field(() => [ItemFlagsWhereInput], {nullable:true})
    AND?: Array<ItemFlagsWhereInput>;

    @Field(() => [ItemFlagsWhereInput], {nullable:true})
    OR?: Array<ItemFlagsWhereInput>;

    @Field(() => [ItemFlagsWhereInput], {nullable:true})
    NOT?: Array<ItemFlagsWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    identifier?: StringFilter;

    @Field(() => ItemFlagMapListRelationFilter, {nullable:true})
    flagMap?: ItemFlagMapListRelationFilter;
}
