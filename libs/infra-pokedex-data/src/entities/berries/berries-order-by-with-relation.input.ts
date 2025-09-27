import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ItemsOrderByWithRelationInput } from '../items/items-order-by-with-relation.input';
import { BerryFirmnessOrderByWithRelationInput } from '../berry-firmness/berry-firmness-order-by-with-relation.input';
import { TypesOrderByWithRelationInput } from '../types/types-order-by-with-relation.input';
import { BerryFlavorsOrderByRelationAggregateInput } from '../berry-flavors/berry-flavors-order-by-relation-aggregate.input';

@InputType()
export class BerriesOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    item_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    firmness_id?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    natural_gift_power?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    natural_gift_type_id?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    size?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    max_harvest?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    growth_time?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    soil_dryness?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    smoothness?: `${SortOrder}`;

    @Field(() => ItemsOrderByWithRelationInput, {nullable:true})
    item?: ItemsOrderByWithRelationInput;

    @Field(() => BerryFirmnessOrderByWithRelationInput, {nullable:true})
    firmness?: BerryFirmnessOrderByWithRelationInput;

    @Field(() => TypesOrderByWithRelationInput, {nullable:true})
    naturalGiftType?: TypesOrderByWithRelationInput;

    @Field(() => BerryFlavorsOrderByRelationAggregateInput, {nullable:true})
    flavors?: BerryFlavorsOrderByRelationAggregateInput;
}
