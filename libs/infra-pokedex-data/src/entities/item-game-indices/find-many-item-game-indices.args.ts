import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ItemGameIndicesWhereInput } from './item-game-indices-where.input';
import { Type } from 'class-transformer';
import { ItemGameIndicesOrderByWithRelationInput } from './item-game-indices-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ItemGameIndicesWhereUniqueInput } from './item-game-indices-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ItemGameIndicesScalarFieldEnum } from './item-game-indices-scalar-field.enum';

@ArgsType()
export class FindManyItemGameIndicesArgs {

    @Field(() => ItemGameIndicesWhereInput, {nullable:true})
    @Type(() => ItemGameIndicesWhereInput)
    where?: ItemGameIndicesWhereInput;

    @Field(() => [ItemGameIndicesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ItemGameIndicesOrderByWithRelationInput>;

    @Field(() => ItemGameIndicesWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ItemGameIndicesWhereUniqueInput, 'item_id_generation_id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ItemGameIndicesScalarFieldEnum], {nullable:true})
    distinct?: Array<`${ItemGameIndicesScalarFieldEnum}`>;
}
