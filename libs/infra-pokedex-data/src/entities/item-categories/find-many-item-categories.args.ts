import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ItemCategoriesWhereInput } from './item-categories-where.input';
import { Type } from 'class-transformer';
import { ItemCategoriesOrderByWithRelationInput } from './item-categories-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ItemCategoriesWhereUniqueInput } from './item-categories-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ItemCategoriesScalarFieldEnum } from './item-categories-scalar-field.enum';

@ArgsType()
export class FindManyItemCategoriesArgs {

    @Field(() => ItemCategoriesWhereInput, {nullable:true})
    @Type(() => ItemCategoriesWhereInput)
    where?: ItemCategoriesWhereInput;

    @Field(() => [ItemCategoriesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ItemCategoriesOrderByWithRelationInput>;

    @Field(() => ItemCategoriesWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ItemCategoriesWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ItemCategoriesScalarFieldEnum], {nullable:true})
    distinct?: Array<`${ItemCategoriesScalarFieldEnum}`>;
}
