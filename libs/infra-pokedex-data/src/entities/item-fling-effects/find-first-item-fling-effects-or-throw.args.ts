import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ItemFlingEffectsWhereInput } from './item-fling-effects-where.input';
import { Type } from 'class-transformer';
import { ItemFlingEffectsOrderByWithRelationInput } from './item-fling-effects-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ItemFlingEffectsWhereUniqueInput } from './item-fling-effects-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ItemFlingEffectsScalarFieldEnum } from './item-fling-effects-scalar-field.enum';

@ArgsType()
export class FindFirstItemFlingEffectsOrThrowArgs {

    @Field(() => ItemFlingEffectsWhereInput, {nullable:true})
    @Type(() => ItemFlingEffectsWhereInput)
    where?: ItemFlingEffectsWhereInput;

    @Field(() => [ItemFlingEffectsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ItemFlingEffectsOrderByWithRelationInput>;

    @Field(() => ItemFlingEffectsWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ItemFlingEffectsWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ItemFlingEffectsScalarFieldEnum], {nullable:true})
    distinct?: Array<`${ItemFlingEffectsScalarFieldEnum}`>;
}
