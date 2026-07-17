import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import type { Identity } from 'identity-type';
import { MovesOrderByRelationAggregateInput } from '../moves/moves-order-by-relation-aggregate.input';

@InputType()
export class MoveTargetsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    identifier?: `${SortOrder}`;

    @Field(() => MovesOrderByRelationAggregateInput, {nullable:true})
    moves?: Identity<MovesOrderByRelationAggregateInput>;
}
