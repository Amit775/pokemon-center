import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import type { Identity } from 'identity-type';
import { BerriesOrderByWithRelationInput } from '../berries/berries-order-by-with-relation.input';
import { ContestTypesOrderByWithRelationInput } from '../contest-types/contest-types-order-by-with-relation.input';
import { TypesOrderByWithRelationInput } from '../types/types-order-by-with-relation.input';

@InputType()
export class BerryFlavorsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    berry_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    contest_type_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    flavor?: `${SortOrder}`;

    @Field(() => BerriesOrderByWithRelationInput, {nullable:true})
    berry?: Identity<BerriesOrderByWithRelationInput>;

    @Field(() => ContestTypesOrderByWithRelationInput, {nullable:true})
    contestType?: Identity<ContestTypesOrderByWithRelationInput>;

    @Field(() => TypesOrderByWithRelationInput, {nullable:true})
    type?: Identity<TypesOrderByWithRelationInput>;
}
