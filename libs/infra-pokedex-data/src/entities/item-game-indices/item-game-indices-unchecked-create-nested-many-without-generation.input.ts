import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemGameIndicesCreateWithoutGenerationInput } from './item-game-indices-create-without-generation.input';
import { Type } from 'class-transformer';
import { ItemGameIndicesCreateOrConnectWithoutGenerationInput } from './item-game-indices-create-or-connect-without-generation.input';
import type { Identity } from 'identity-type';
import { ItemGameIndicesCreateManyGenerationInputEnvelope } from './item-game-indices-create-many-generation-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { ItemGameIndicesWhereUniqueInput } from './item-game-indices-where-unique.input';

@InputType()
export class ItemGameIndicesUncheckedCreateNestedManyWithoutGenerationInput {

    @Field(() => [ItemGameIndicesCreateWithoutGenerationInput], {nullable:true})
    @Type(() => ItemGameIndicesCreateWithoutGenerationInput)
    create?: Array<ItemGameIndicesCreateWithoutGenerationInput>;

    @Field(() => [ItemGameIndicesCreateOrConnectWithoutGenerationInput], {nullable:true})
    @Type(() => ItemGameIndicesCreateOrConnectWithoutGenerationInput)
    connectOrCreate?: Array<ItemGameIndicesCreateOrConnectWithoutGenerationInput>;

    @Field(() => ItemGameIndicesCreateManyGenerationInputEnvelope, {nullable:true})
    @Type(() => ItemGameIndicesCreateManyGenerationInputEnvelope)
    createMany?: Identity<ItemGameIndicesCreateManyGenerationInputEnvelope>;

    @Field(() => [ItemGameIndicesWhereUniqueInput], {nullable:true})
    @Type(() => ItemGameIndicesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ItemGameIndicesWhereUniqueInput, 'item_id_generation_id'>>;
}
