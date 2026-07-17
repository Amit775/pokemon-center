import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ItemGameIndicesWhereUniqueInput } from './item-game-indices-where-unique.input';
import { Type } from 'class-transformer';
import { ItemGameIndicesUpdateWithoutGenerationInput } from './item-game-indices-update-without-generation.input';

@InputType()
export class ItemGameIndicesUpdateWithWhereUniqueWithoutGenerationInput {

    @Field(() => ItemGameIndicesWhereUniqueInput, {nullable:false})
    @Type(() => ItemGameIndicesWhereUniqueInput)
    where!: Prisma.AtLeast<ItemGameIndicesWhereUniqueInput, 'item_id_generation_id'>;

    @Field(() => ItemGameIndicesUpdateWithoutGenerationInput, {nullable:false})
    @Type(() => ItemGameIndicesUpdateWithoutGenerationInput)
    data!: ItemGameIndicesUpdateWithoutGenerationInput;
}
