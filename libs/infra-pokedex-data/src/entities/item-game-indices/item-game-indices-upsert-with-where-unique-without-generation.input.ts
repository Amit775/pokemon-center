import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { ItemGameIndicesWhereUniqueInput } from './item-game-indices-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { ItemGameIndicesUpdateWithoutGenerationInput } from './item-game-indices-update-without-generation.input';
import { ItemGameIndicesCreateWithoutGenerationInput } from './item-game-indices-create-without-generation.input';

@InputType()
export class ItemGameIndicesUpsertWithWhereUniqueWithoutGenerationInput {

    @Field(() => ItemGameIndicesWhereUniqueInput, {nullable:false})
    @Type(() => ItemGameIndicesWhereUniqueInput)
    where!: Prisma.AtLeast<ItemGameIndicesWhereUniqueInput, 'item_id_generation_id'>;

    @Field(() => ItemGameIndicesUpdateWithoutGenerationInput, {nullable:false})
    @Type(() => ItemGameIndicesUpdateWithoutGenerationInput)
    update!: Identity<ItemGameIndicesUpdateWithoutGenerationInput>;

    @Field(() => ItemGameIndicesCreateWithoutGenerationInput, {nullable:false})
    @Type(() => ItemGameIndicesCreateWithoutGenerationInput)
    create!: Identity<ItemGameIndicesCreateWithoutGenerationInput>;
}
