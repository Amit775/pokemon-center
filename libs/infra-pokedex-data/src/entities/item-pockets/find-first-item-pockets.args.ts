import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ItemPocketsWhereInput } from './item-pockets-where.input';
import { Type } from 'class-transformer';
import { ItemPocketsOrderByWithRelationInput } from './item-pockets-order-by-with-relation.input';
import { Prisma } from '@pokemon-center/prisma';
import { ItemPocketsWhereUniqueInput } from './item-pockets-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ItemPocketsScalarFieldEnum } from './item-pockets-scalar-field.enum';

@ArgsType()
export class FindFirstItemPocketsArgs {

    @Field(() => ItemPocketsWhereInput, {nullable:true})
    @Type(() => ItemPocketsWhereInput)
    where?: Identity<ItemPocketsWhereInput>;

    @Field(() => [ItemPocketsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ItemPocketsOrderByWithRelationInput>;

    @Field(() => ItemPocketsWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ItemPocketsWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ItemPocketsScalarFieldEnum], {nullable:true})
    distinct?: Array<`${ItemPocketsScalarFieldEnum}`>;
}
