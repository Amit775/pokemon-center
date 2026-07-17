import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemGameIndicesCreateWithoutItemInput } from './item-game-indices-create-without-item.input';
import { Type } from 'class-transformer';
import { ItemGameIndicesCreateOrConnectWithoutItemInput } from './item-game-indices-create-or-connect-without-item.input';
import { ItemGameIndicesUpsertWithWhereUniqueWithoutItemInput } from './item-game-indices-upsert-with-where-unique-without-item.input';
import type { Identity } from 'identity-type';
import { ItemGameIndicesCreateManyItemInputEnvelope } from './item-game-indices-create-many-item-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { ItemGameIndicesWhereUniqueInput } from './item-game-indices-where-unique.input';
import { ItemGameIndicesUpdateWithWhereUniqueWithoutItemInput } from './item-game-indices-update-with-where-unique-without-item.input';
import { ItemGameIndicesUpdateManyWithWhereWithoutItemInput } from './item-game-indices-update-many-with-where-without-item.input';
import { ItemGameIndicesScalarWhereInput } from './item-game-indices-scalar-where.input';

@InputType()
export class ItemGameIndicesUncheckedUpdateManyWithoutItemNestedInput {

    @Field(() => [ItemGameIndicesCreateWithoutItemInput], {nullable:true})
    @Type(() => ItemGameIndicesCreateWithoutItemInput)
    create?: Array<ItemGameIndicesCreateWithoutItemInput>;

    @Field(() => [ItemGameIndicesCreateOrConnectWithoutItemInput], {nullable:true})
    @Type(() => ItemGameIndicesCreateOrConnectWithoutItemInput)
    connectOrCreate?: Array<ItemGameIndicesCreateOrConnectWithoutItemInput>;

    @Field(() => [ItemGameIndicesUpsertWithWhereUniqueWithoutItemInput], {nullable:true})
    @Type(() => ItemGameIndicesUpsertWithWhereUniqueWithoutItemInput)
    upsert?: Array<ItemGameIndicesUpsertWithWhereUniqueWithoutItemInput>;

    @Field(() => ItemGameIndicesCreateManyItemInputEnvelope, {nullable:true})
    @Type(() => ItemGameIndicesCreateManyItemInputEnvelope)
    createMany?: Identity<ItemGameIndicesCreateManyItemInputEnvelope>;

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

    @Field(() => [ItemGameIndicesUpdateWithWhereUniqueWithoutItemInput], {nullable:true})
    @Type(() => ItemGameIndicesUpdateWithWhereUniqueWithoutItemInput)
    update?: Array<ItemGameIndicesUpdateWithWhereUniqueWithoutItemInput>;

    @Field(() => [ItemGameIndicesUpdateManyWithWhereWithoutItemInput], {nullable:true})
    @Type(() => ItemGameIndicesUpdateManyWithWhereWithoutItemInput)
    updateMany?: Array<ItemGameIndicesUpdateManyWithWhereWithoutItemInput>;

    @Field(() => [ItemGameIndicesScalarWhereInput], {nullable:true})
    @Type(() => ItemGameIndicesScalarWhereInput)
    deleteMany?: Array<ItemGameIndicesScalarWhereInput>;
}
