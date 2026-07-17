import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemFlagMapCreateWithoutFlagInput } from './item-flag-map-create-without-flag.input';
import { Type } from 'class-transformer';
import { ItemFlagMapCreateOrConnectWithoutFlagInput } from './item-flag-map-create-or-connect-without-flag.input';
import { ItemFlagMapCreateManyFlagInputEnvelope } from './item-flag-map-create-many-flag-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ItemFlagMapWhereUniqueInput } from './item-flag-map-where-unique.input';

@InputType()
export class ItemFlagMapCreateNestedManyWithoutFlagInput {

    @Field(() => [ItemFlagMapCreateWithoutFlagInput], {nullable:true})
    @Type(() => ItemFlagMapCreateWithoutFlagInput)
    create?: Array<ItemFlagMapCreateWithoutFlagInput>;

    @Field(() => [ItemFlagMapCreateOrConnectWithoutFlagInput], {nullable:true})
    @Type(() => ItemFlagMapCreateOrConnectWithoutFlagInput)
    connectOrCreate?: Array<ItemFlagMapCreateOrConnectWithoutFlagInput>;

    @Field(() => ItemFlagMapCreateManyFlagInputEnvelope, {nullable:true})
    @Type(() => ItemFlagMapCreateManyFlagInputEnvelope)
    createMany?: ItemFlagMapCreateManyFlagInputEnvelope;

    @Field(() => [ItemFlagMapWhereUniqueInput], {nullable:true})
    @Type(() => ItemFlagMapWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ItemFlagMapWhereUniqueInput, 'item_id'>>;
}
