import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemFlagMapCreateWithoutFlagInput } from './item-flag-map-create-without-flag.input';
import { Type } from 'class-transformer';
import { ItemFlagMapCreateOrConnectWithoutFlagInput } from './item-flag-map-create-or-connect-without-flag.input';
import type { Identity } from 'identity-type';
import { ItemFlagMapCreateManyFlagInputEnvelope } from './item-flag-map-create-many-flag-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { ItemFlagMapWhereUniqueInput } from './item-flag-map-where-unique.input';

@InputType()
export class ItemFlagMapUncheckedCreateNestedManyWithoutFlagInput {

    @Field(() => [ItemFlagMapCreateWithoutFlagInput], {nullable:true})
    @Type(() => ItemFlagMapCreateWithoutFlagInput)
    create?: Array<ItemFlagMapCreateWithoutFlagInput>;

    @Field(() => [ItemFlagMapCreateOrConnectWithoutFlagInput], {nullable:true})
    @Type(() => ItemFlagMapCreateOrConnectWithoutFlagInput)
    connectOrCreate?: Array<ItemFlagMapCreateOrConnectWithoutFlagInput>;

    @Field(() => ItemFlagMapCreateManyFlagInputEnvelope, {nullable:true})
    @Type(() => ItemFlagMapCreateManyFlagInputEnvelope)
    createMany?: Identity<ItemFlagMapCreateManyFlagInputEnvelope>;

    @Field(() => [ItemFlagMapWhereUniqueInput], {nullable:true})
    @Type(() => ItemFlagMapWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ItemFlagMapWhereUniqueInput, 'item_id'>>;
}
