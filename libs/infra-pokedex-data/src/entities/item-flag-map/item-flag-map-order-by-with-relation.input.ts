import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ItemsOrderByWithRelationInput } from '../items/items-order-by-with-relation.input';
import { ItemFlagsOrderByWithRelationInput } from '../item-flags/item-flags-order-by-with-relation.input';

@InputType()
export class ItemFlagMapOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    item_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    item_flag_id?: `${SortOrder}`;

    @Field(() => ItemsOrderByWithRelationInput, {nullable:true})
    item?: ItemsOrderByWithRelationInput;

    @Field(() => ItemFlagsOrderByWithRelationInput, {nullable:true})
    flag?: ItemFlagsOrderByWithRelationInput;
}
