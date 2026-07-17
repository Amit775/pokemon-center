import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import type { Identity } from 'identity-type';
import { MovesOrderByRelationAggregateInput } from '../moves/moves-order-by-relation-aggregate.input';

@InputType()
export class SuperContestEffectsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    appeal?: `${SortOrder}`;

    @Field(() => MovesOrderByRelationAggregateInput, {nullable:true})
    moves?: Identity<MovesOrderByRelationAggregateInput>;
}
