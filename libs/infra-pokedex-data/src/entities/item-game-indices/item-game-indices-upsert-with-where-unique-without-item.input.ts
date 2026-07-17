import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ItemGameIndicesWhereUniqueInput } from './item-game-indices-where-unique.input';
import { Type } from 'class-transformer';
import { ItemGameIndicesUpdateWithoutItemInput } from './item-game-indices-update-without-item.input';
import { ItemGameIndicesCreateWithoutItemInput } from './item-game-indices-create-without-item.input';

@InputType()
export class ItemGameIndicesUpsertWithWhereUniqueWithoutItemInput {

    @Field(() => ItemGameIndicesWhereUniqueInput, {nullable:false})
    @Type(() => ItemGameIndicesWhereUniqueInput)
    where!: Prisma.AtLeast<ItemGameIndicesWhereUniqueInput, 'item_id_generation_id'>;

    @Field(() => ItemGameIndicesUpdateWithoutItemInput, {nullable:false})
    @Type(() => ItemGameIndicesUpdateWithoutItemInput)
    update!: ItemGameIndicesUpdateWithoutItemInput;

    @Field(() => ItemGameIndicesCreateWithoutItemInput, {nullable:false})
    @Type(() => ItemGameIndicesCreateWithoutItemInput)
    create!: ItemGameIndicesCreateWithoutItemInput;
}
