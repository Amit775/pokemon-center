import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class MoveMetaStatChangesOrderByRelationAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    _count?: `${SortOrder}`;
}
