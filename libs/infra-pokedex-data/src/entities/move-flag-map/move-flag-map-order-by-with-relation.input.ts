import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { MovesOrderByWithRelationInput } from '../moves/moves-order-by-with-relation.input';
import { MoveFlagsOrderByWithRelationInput } from '../move-flags/move-flags-order-by-with-relation.input';

@InputType()
export class MoveFlagMapOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    move_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    move_flag_id?: `${SortOrder}`;

    @Field(() => MovesOrderByWithRelationInput, {nullable:true})
    move?: MovesOrderByWithRelationInput;

    @Field(() => MoveFlagsOrderByWithRelationInput, {nullable:true})
    flag?: MoveFlagsOrderByWithRelationInput;
}
