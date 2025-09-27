import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
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
    berry?: BerriesOrderByWithRelationInput;

    @Field(() => ContestTypesOrderByWithRelationInput, {nullable:true})
    contestType?: ContestTypesOrderByWithRelationInput;

    @Field(() => TypesOrderByWithRelationInput, {nullable:true})
    type?: TypesOrderByWithRelationInput;
}
