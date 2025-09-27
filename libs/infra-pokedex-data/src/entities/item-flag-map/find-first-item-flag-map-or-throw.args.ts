import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ItemFlagMapWhereInput } from './item-flag-map-where.input';
import { Type } from 'class-transformer';
import { ItemFlagMapOrderByWithRelationInput } from './item-flag-map-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ItemFlagMapWhereUniqueInput } from './item-flag-map-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ItemFlagMapScalarFieldEnum } from './item-flag-map-scalar-field.enum';

@ArgsType()
export class FindFirstItemFlagMapOrThrowArgs {

    @Field(() => ItemFlagMapWhereInput, {nullable:true})
    @Type(() => ItemFlagMapWhereInput)
    where?: ItemFlagMapWhereInput;

    @Field(() => [ItemFlagMapOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ItemFlagMapOrderByWithRelationInput>;

    @Field(() => ItemFlagMapWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ItemFlagMapWhereUniqueInput, 'item_id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ItemFlagMapScalarFieldEnum], {nullable:true})
    distinct?: Array<`${ItemFlagMapScalarFieldEnum}`>;
}
