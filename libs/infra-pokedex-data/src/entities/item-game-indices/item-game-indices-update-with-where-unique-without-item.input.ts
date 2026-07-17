import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { ItemGameIndicesWhereUniqueInput } from './item-game-indices-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { ItemGameIndicesUpdateWithoutItemInput } from './item-game-indices-update-without-item.input';

@InputType()
export class ItemGameIndicesUpdateWithWhereUniqueWithoutItemInput {

    @Field(() => ItemGameIndicesWhereUniqueInput, {nullable:false})
    @Type(() => ItemGameIndicesWhereUniqueInput)
    where!: Prisma.AtLeast<ItemGameIndicesWhereUniqueInput, 'item_id_generation_id'>;

    @Field(() => ItemGameIndicesUpdateWithoutItemInput, {nullable:false})
    @Type(() => ItemGameIndicesUpdateWithoutItemInput)
    data!: Identity<ItemGameIndicesUpdateWithoutItemInput>;
}
