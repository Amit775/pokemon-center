import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemGameIndicesCreateWithoutGenerationInput } from './item-game-indices-create-without-generation.input';
import { Type } from 'class-transformer';
import { ItemGameIndicesCreateOrConnectWithoutGenerationInput } from './item-game-indices-create-or-connect-without-generation.input';
import { ItemGameIndicesUpsertWithWhereUniqueWithoutGenerationInput } from './item-game-indices-upsert-with-where-unique-without-generation.input';
import { ItemGameIndicesCreateManyGenerationInputEnvelope } from './item-game-indices-create-many-generation-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ItemGameIndicesWhereUniqueInput } from './item-game-indices-where-unique.input';
import { ItemGameIndicesUpdateWithWhereUniqueWithoutGenerationInput } from './item-game-indices-update-with-where-unique-without-generation.input';
import { ItemGameIndicesUpdateManyWithWhereWithoutGenerationInput } from './item-game-indices-update-many-with-where-without-generation.input';
import { ItemGameIndicesScalarWhereInput } from './item-game-indices-scalar-where.input';

@InputType()
export class ItemGameIndicesUncheckedUpdateManyWithoutGenerationNestedInput {

    @Field(() => [ItemGameIndicesCreateWithoutGenerationInput], {nullable:true})
    @Type(() => ItemGameIndicesCreateWithoutGenerationInput)
    create?: Array<ItemGameIndicesCreateWithoutGenerationInput>;

    @Field(() => [ItemGameIndicesCreateOrConnectWithoutGenerationInput], {nullable:true})
    @Type(() => ItemGameIndicesCreateOrConnectWithoutGenerationInput)
    connectOrCreate?: Array<ItemGameIndicesCreateOrConnectWithoutGenerationInput>;

    @Field(() => [ItemGameIndicesUpsertWithWhereUniqueWithoutGenerationInput], {nullable:true})
    @Type(() => ItemGameIndicesUpsertWithWhereUniqueWithoutGenerationInput)
    upsert?: Array<ItemGameIndicesUpsertWithWhereUniqueWithoutGenerationInput>;

    @Field(() => ItemGameIndicesCreateManyGenerationInputEnvelope, {nullable:true})
    @Type(() => ItemGameIndicesCreateManyGenerationInputEnvelope)
    createMany?: ItemGameIndicesCreateManyGenerationInputEnvelope;

    @Field(() => [ItemGameIndicesWhereUniqueInput], {nullable:true})
    @Type(() => ItemGameIndicesWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ItemGameIndicesWhereUniqueInput, 'item_id_generation_id'>>;

    @Field(() => [ItemGameIndicesWhereUniqueInput], {nullable:true})
    @Type(() => ItemGameIndicesWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ItemGameIndicesWhereUniqueInput, 'item_id_generation_id'>>;

    @Field(() => [ItemGameIndicesWhereUniqueInput], {nullable:true})
    @Type(() => ItemGameIndicesWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ItemGameIndicesWhereUniqueInput, 'item_id_generation_id'>>;

    @Field(() => [ItemGameIndicesWhereUniqueInput], {nullable:true})
    @Type(() => ItemGameIndicesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ItemGameIndicesWhereUniqueInput, 'item_id_generation_id'>>;

    @Field(() => [ItemGameIndicesUpdateWithWhereUniqueWithoutGenerationInput], {nullable:true})
    @Type(() => ItemGameIndicesUpdateWithWhereUniqueWithoutGenerationInput)
    update?: Array<ItemGameIndicesUpdateWithWhereUniqueWithoutGenerationInput>;

    @Field(() => [ItemGameIndicesUpdateManyWithWhereWithoutGenerationInput], {nullable:true})
    @Type(() => ItemGameIndicesUpdateManyWithWhereWithoutGenerationInput)
    updateMany?: Array<ItemGameIndicesUpdateManyWithWhereWithoutGenerationInput>;

    @Field(() => [ItemGameIndicesScalarWhereInput], {nullable:true})
    @Type(() => ItemGameIndicesScalarWhereInput)
    deleteMany?: Array<ItemGameIndicesScalarWhereInput>;
}
