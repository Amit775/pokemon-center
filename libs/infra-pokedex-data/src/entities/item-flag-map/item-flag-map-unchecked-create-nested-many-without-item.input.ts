import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemFlagMapCreateWithoutItemInput } from './item-flag-map-create-without-item.input';
import { Type } from 'class-transformer';
import { ItemFlagMapCreateOrConnectWithoutItemInput } from './item-flag-map-create-or-connect-without-item.input';
import type { Identity } from 'identity-type';
import { ItemFlagMapCreateManyItemInputEnvelope } from './item-flag-map-create-many-item-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { ItemFlagMapWhereUniqueInput } from './item-flag-map-where-unique.input';

@InputType()
export class ItemFlagMapUncheckedCreateNestedManyWithoutItemInput {

    @Field(() => [ItemFlagMapCreateWithoutItemInput], {nullable:true})
    @Type(() => ItemFlagMapCreateWithoutItemInput)
    create?: Array<ItemFlagMapCreateWithoutItemInput>;

    @Field(() => [ItemFlagMapCreateOrConnectWithoutItemInput], {nullable:true})
    @Type(() => ItemFlagMapCreateOrConnectWithoutItemInput)
    connectOrCreate?: Array<ItemFlagMapCreateOrConnectWithoutItemInput>;

    @Field(() => ItemFlagMapCreateManyItemInputEnvelope, {nullable:true})
    @Type(() => ItemFlagMapCreateManyItemInputEnvelope)
    createMany?: Identity<ItemFlagMapCreateManyItemInputEnvelope>;

    @Field(() => [ItemFlagMapWhereUniqueInput], {nullable:true})
    @Type(() => ItemFlagMapWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ItemFlagMapWhereUniqueInput, 'item_id'>>;
}
