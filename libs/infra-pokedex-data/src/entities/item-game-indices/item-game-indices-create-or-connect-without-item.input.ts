import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ItemGameIndicesWhereUniqueInput } from './item-game-indices-where-unique.input';
import { Type } from 'class-transformer';
import { ItemGameIndicesCreateWithoutItemInput } from './item-game-indices-create-without-item.input';

@InputType()
export class ItemGameIndicesCreateOrConnectWithoutItemInput {

    @Field(() => ItemGameIndicesWhereUniqueInput, {nullable:false})
    @Type(() => ItemGameIndicesWhereUniqueInput)
    where!: Prisma.AtLeast<ItemGameIndicesWhereUniqueInput, 'item_id_generation_id'>;

    @Field(() => ItemGameIndicesCreateWithoutItemInput, {nullable:false})
    @Type(() => ItemGameIndicesCreateWithoutItemInput)
    create!: ItemGameIndicesCreateWithoutItemInput;
}
