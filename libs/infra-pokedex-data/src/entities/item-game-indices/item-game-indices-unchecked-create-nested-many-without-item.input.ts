import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemGameIndicesCreateWithoutItemInput } from './item-game-indices-create-without-item.input';
import { Type } from 'class-transformer';
import { ItemGameIndicesCreateOrConnectWithoutItemInput } from './item-game-indices-create-or-connect-without-item.input';
import type { Identity } from 'identity-type';
import { ItemGameIndicesCreateManyItemInputEnvelope } from './item-game-indices-create-many-item-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { ItemGameIndicesWhereUniqueInput } from './item-game-indices-where-unique.input';

@InputType()
export class ItemGameIndicesUncheckedCreateNestedManyWithoutItemInput {

    @Field(() => [ItemGameIndicesCreateWithoutItemInput], {nullable:true})
    @Type(() => ItemGameIndicesCreateWithoutItemInput)
    create?: Array<ItemGameIndicesCreateWithoutItemInput>;

    @Field(() => [ItemGameIndicesCreateOrConnectWithoutItemInput], {nullable:true})
    @Type(() => ItemGameIndicesCreateOrConnectWithoutItemInput)
    connectOrCreate?: Array<ItemGameIndicesCreateOrConnectWithoutItemInput>;

    @Field(() => ItemGameIndicesCreateManyItemInputEnvelope, {nullable:true})
    @Type(() => ItemGameIndicesCreateManyItemInputEnvelope)
    createMany?: Identity<ItemGameIndicesCreateManyItemInputEnvelope>;

    @Field(() => [ItemGameIndicesWhereUniqueInput], {nullable:true})
    @Type(() => ItemGameIndicesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ItemGameIndicesWhereUniqueInput, 'item_id_generation_id'>>;
}
