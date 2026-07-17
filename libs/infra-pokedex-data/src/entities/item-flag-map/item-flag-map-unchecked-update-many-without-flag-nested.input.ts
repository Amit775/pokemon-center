import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemFlagMapCreateWithoutFlagInput } from './item-flag-map-create-without-flag.input';
import { Type } from 'class-transformer';
import { ItemFlagMapCreateOrConnectWithoutFlagInput } from './item-flag-map-create-or-connect-without-flag.input';
import { ItemFlagMapUpsertWithWhereUniqueWithoutFlagInput } from './item-flag-map-upsert-with-where-unique-without-flag.input';
import type { Identity } from 'identity-type';
import { ItemFlagMapCreateManyFlagInputEnvelope } from './item-flag-map-create-many-flag-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { ItemFlagMapWhereUniqueInput } from './item-flag-map-where-unique.input';
import { ItemFlagMapUpdateWithWhereUniqueWithoutFlagInput } from './item-flag-map-update-with-where-unique-without-flag.input';
import { ItemFlagMapUpdateManyWithWhereWithoutFlagInput } from './item-flag-map-update-many-with-where-without-flag.input';
import { ItemFlagMapScalarWhereInput } from './item-flag-map-scalar-where.input';

@InputType()
export class ItemFlagMapUncheckedUpdateManyWithoutFlagNestedInput {

    @Field(() => [ItemFlagMapCreateWithoutFlagInput], {nullable:true})
    @Type(() => ItemFlagMapCreateWithoutFlagInput)
    create?: Array<ItemFlagMapCreateWithoutFlagInput>;

    @Field(() => [ItemFlagMapCreateOrConnectWithoutFlagInput], {nullable:true})
    @Type(() => ItemFlagMapCreateOrConnectWithoutFlagInput)
    connectOrCreate?: Array<ItemFlagMapCreateOrConnectWithoutFlagInput>;

    @Field(() => [ItemFlagMapUpsertWithWhereUniqueWithoutFlagInput], {nullable:true})
    @Type(() => ItemFlagMapUpsertWithWhereUniqueWithoutFlagInput)
    upsert?: Array<ItemFlagMapUpsertWithWhereUniqueWithoutFlagInput>;

    @Field(() => ItemFlagMapCreateManyFlagInputEnvelope, {nullable:true})
    @Type(() => ItemFlagMapCreateManyFlagInputEnvelope)
    createMany?: Identity<ItemFlagMapCreateManyFlagInputEnvelope>;

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

    @Field(() => [ItemFlagMapUpdateWithWhereUniqueWithoutFlagInput], {nullable:true})
    @Type(() => ItemFlagMapUpdateWithWhereUniqueWithoutFlagInput)
    update?: Array<ItemFlagMapUpdateWithWhereUniqueWithoutFlagInput>;

    @Field(() => [ItemFlagMapUpdateManyWithWhereWithoutFlagInput], {nullable:true})
    @Type(() => ItemFlagMapUpdateManyWithWhereWithoutFlagInput)
    updateMany?: Array<ItemFlagMapUpdateManyWithWhereWithoutFlagInput>;

    @Field(() => [ItemFlagMapScalarWhereInput], {nullable:true})
    @Type(() => ItemFlagMapScalarWhereInput)
    deleteMany?: Array<ItemFlagMapScalarWhereInput>;
}
