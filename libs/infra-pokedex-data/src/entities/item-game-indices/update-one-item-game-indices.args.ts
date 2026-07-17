import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ItemGameIndicesUpdateInput } from './item-game-indices-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ItemGameIndicesWhereUniqueInput } from './item-game-indices-where-unique.input';

@ArgsType()
export class UpdateOneItemGameIndicesArgs {

    @Field(() => ItemGameIndicesUpdateInput, {nullable:false})
    @Type(() => ItemGameIndicesUpdateInput)
    data!: ItemGameIndicesUpdateInput;

    @Field(() => ItemGameIndicesWhereUniqueInput, {nullable:false})
    @Type(() => ItemGameIndicesWhereUniqueInput)
    where!: Prisma.AtLeast<ItemGameIndicesWhereUniqueInput, 'item_id_generation_id'>;
}
