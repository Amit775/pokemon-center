import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import type { Identity } from 'identity-type';
import { MovesOrderByWithRelationInput } from '../moves/moves-order-by-with-relation.input';

@InputType()
export class SuperContestCombosOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    first_move_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    second_move_id?: `${SortOrder}`;

    @Field(() => MovesOrderByWithRelationInput, {nullable:true})
    firstMove?: Identity<MovesOrderByWithRelationInput>;

    @Field(() => MovesOrderByWithRelationInput, {nullable:true})
    secondMove?: Identity<MovesOrderByWithRelationInput>;
}
