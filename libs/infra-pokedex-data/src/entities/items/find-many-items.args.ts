import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ItemsWhereInput } from './items-where.input';
import { Type } from 'class-transformer';
import { ItemsOrderByWithRelationInput } from './items-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ItemsWhereUniqueInput } from './items-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ItemsScalarFieldEnum } from './items-scalar-field.enum';

@ArgsType()
export class FindManyItemsArgs {

    @Field(() => ItemsWhereInput, {nullable:true})
    @Type(() => ItemsWhereInput)
    where?: ItemsWhereInput;

    @Field(() => [ItemsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ItemsOrderByWithRelationInput>;

    @Field(() => ItemsWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ItemsWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ItemsScalarFieldEnum], {nullable:true})
    distinct?: Array<`${ItemsScalarFieldEnum}`>;
}
