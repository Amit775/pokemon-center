import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { MovesOrderByRelationAggregateInput } from '../moves/moves-order-by-relation-aggregate.input';
import { BerryFlavorsOrderByRelationAggregateInput } from '../berry-flavors/berry-flavors-order-by-relation-aggregate.input';

@InputType()
export class ContestTypesOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    identifier?: `${SortOrder}`;

    @Field(() => MovesOrderByRelationAggregateInput, {nullable:true})
    moves?: MovesOrderByRelationAggregateInput;

    @Field(() => BerryFlavorsOrderByRelationAggregateInput, {nullable:true})
    berryFlavors?: BerryFlavorsOrderByRelationAggregateInput;
}
