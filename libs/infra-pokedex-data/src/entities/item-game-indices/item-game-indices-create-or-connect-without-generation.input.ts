import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ItemGameIndicesWhereUniqueInput } from './item-game-indices-where-unique.input';
import { Type } from 'class-transformer';
import { ItemGameIndicesCreateWithoutGenerationInput } from './item-game-indices-create-without-generation.input';

@InputType()
export class ItemGameIndicesCreateOrConnectWithoutGenerationInput {

    @Field(() => ItemGameIndicesWhereUniqueInput, {nullable:false})
    @Type(() => ItemGameIndicesWhereUniqueInput)
    where!: Prisma.AtLeast<ItemGameIndicesWhereUniqueInput, 'item_id_generation_id'>;

    @Field(() => ItemGameIndicesCreateWithoutGenerationInput, {nullable:false})
    @Type(() => ItemGameIndicesCreateWithoutGenerationInput)
    create!: ItemGameIndicesCreateWithoutGenerationInput;
}
