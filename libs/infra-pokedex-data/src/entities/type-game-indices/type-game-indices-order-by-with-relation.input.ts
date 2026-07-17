import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import type { Identity } from 'identity-type';
import { TypesOrderByWithRelationInput } from '../types/types-order-by-with-relation.input';
import { GenerationsOrderByWithRelationInput } from '../generations/generations-order-by-with-relation.input';

@InputType()
export class TypeGameIndicesOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    type_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    generation_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    game_index?: `${SortOrder}`;

    @Field(() => TypesOrderByWithRelationInput, {nullable:true})
    type?: Identity<TypesOrderByWithRelationInput>;

    @Field(() => GenerationsOrderByWithRelationInput, {nullable:true})
    generation?: Identity<GenerationsOrderByWithRelationInput>;
}
