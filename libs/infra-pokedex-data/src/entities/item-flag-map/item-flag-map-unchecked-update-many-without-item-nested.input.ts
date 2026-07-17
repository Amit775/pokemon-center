import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemFlagMapCreateWithoutItemInput } from './item-flag-map-create-without-item.input';
import { Type } from 'class-transformer';
import { ItemFlagMapCreateOrConnectWithoutItemInput } from './item-flag-map-create-or-connect-without-item.input';
import { ItemFlagMapUpsertWithWhereUniqueWithoutItemInput } from './item-flag-map-upsert-with-where-unique-without-item.input';
import type { Identity } from 'identity-type';
import { ItemFlagMapCreateManyItemInputEnvelope } from './item-flag-map-create-many-item-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { ItemFlagMapWhereUniqueInput } from './item-flag-map-where-unique.input';
import { ItemFlagMapUpdateWithWhereUniqueWithoutItemInput } from './item-flag-map-update-with-where-unique-without-item.input';
import { ItemFlagMapUpdateManyWithWhereWithoutItemInput } from './item-flag-map-update-many-with-where-without-item.input';
import { ItemFlagMapScalarWhereInput } from './item-flag-map-scalar-where.input';

@InputType()
export class ItemFlagMapUncheckedUpdateManyWithoutItemNestedInput {

    @Field(() => [ItemFlagMapCreateWithoutItemInput], {nullable:true})
    @Type(() => ItemFlagMapCreateWithoutItemInput)
    create?: Array<ItemFlagMapCreateWithoutItemInput>;

    @Field(() => [ItemFlagMapCreateOrConnectWithoutItemInput], {nullable:true})
    @Type(() => ItemFlagMapCreateOrConnectWithoutItemInput)
    connectOrCreate?: Array<ItemFlagMapCreateOrConnectWithoutItemInput>;

    @Field(() => [ItemFlagMapUpsertWithWhereUniqueWithoutItemInput], {nullable:true})
    @Type(() => ItemFlagMapUpsertWithWhereUniqueWithoutItemInput)
    upsert?: Array<ItemFlagMapUpsertWithWhereUniqueWithoutItemInput>;

    @Field(() => ItemFlagMapCreateManyItemInputEnvelope, {nullable:true})
    @Type(() => ItemFlagMapCreateManyItemInputEnvelope)
    createMany?: Identity<ItemFlagMapCreateManyItemInputEnvelope>;

    @Field(() => [ItemFlagMapWhereUniqueInput], {nullable:true})
    @Type(() => ItemFlagMapWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ItemFlagMapWhereUniqueInput, 'item_id'>>;

    @Field(() => [ItemFlagMapWhereUniqueInput], {nullable:true})
    @Type(() => ItemFlagMapWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ItemFlagMapWhereUniqueInput, 'item_id'>>;

    @Field(() => [ItemFlagMapWhereUniqueInput], {nullable:true})
    @Type(() => ItemFlagMapWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ItemFlagMapWhereUniqueInput, 'item_id'>>;

    @Field(() => [ItemFlagMapWhereUniqueInput], {nullable:true})
    @Type(() => ItemFlagMapWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ItemFlagMapWhereUniqueInput, 'item_id'>>;

    @Field(() => [ItemFlagMapUpdateWithWhereUniqueWithoutItemInput], {nullable:true})
    @Type(() => ItemFlagMapUpdateWithWhereUniqueWithoutItemInput)
    update?: Array<ItemFlagMapUpdateWithWhereUniqueWithoutItemInput>;

    @Field(() => [ItemFlagMapUpdateManyWithWhereWithoutItemInput], {nullable:true})
    @Type(() => ItemFlagMapUpdateManyWithWhereWithoutItemInput)
    updateMany?: Array<ItemFlagMapUpdateManyWithWhereWithoutItemInput>;

    @Field(() => [ItemFlagMapScalarWhereInput], {nullable:true})
    @Type(() => ItemFlagMapScalarWhereInput)
    deleteMany?: Array<ItemFlagMapScalarWhereInput>;
}
