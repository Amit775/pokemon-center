import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ItemGameIndicesWhereUniqueInput } from './item-game-indices-where-unique.input';
import { Type } from 'class-transformer';
import { ItemGameIndicesCreateInput } from './item-game-indices-create.input';
import { ItemGameIndicesUpdateInput } from './item-game-indices-update.input';

@ArgsType()
export class UpsertOneItemGameIndicesArgs {

    @Field(() => ItemGameIndicesWhereUniqueInput, {nullable:false})
    @Type(() => ItemGameIndicesWhereUniqueInput)
    where!: Prisma.AtLeast<ItemGameIndicesWhereUniqueInput, 'item_id_generation_id'>;

    @Field(() => ItemGameIndicesCreateInput, {nullable:false})
    @Type(() => ItemGameIndicesCreateInput)
    create!: ItemGameIndicesCreateInput;

    @Field(() => ItemGameIndicesUpdateInput, {nullable:false})
    @Type(() => ItemGameIndicesUpdateInput)
    update!: ItemGameIndicesUpdateInput;
}
