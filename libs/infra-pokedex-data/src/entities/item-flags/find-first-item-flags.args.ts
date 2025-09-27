import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ItemFlagsWhereInput } from './item-flags-where.input';
import { Type } from 'class-transformer';
import { ItemFlagsOrderByWithRelationInput } from './item-flags-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ItemFlagsWhereUniqueInput } from './item-flags-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ItemFlagsScalarFieldEnum } from './item-flags-scalar-field.enum';

@ArgsType()
export class FindFirstItemFlagsArgs {

    @Field(() => ItemFlagsWhereInput, {nullable:true})
    @Type(() => ItemFlagsWhereInput)
    where?: ItemFlagsWhereInput;

    @Field(() => [ItemFlagsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ItemFlagsOrderByWithRelationInput>;

    @Field(() => ItemFlagsWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ItemFlagsWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ItemFlagsScalarFieldEnum], {nullable:true})
    distinct?: Array<`${ItemFlagsScalarFieldEnum}`>;
}
