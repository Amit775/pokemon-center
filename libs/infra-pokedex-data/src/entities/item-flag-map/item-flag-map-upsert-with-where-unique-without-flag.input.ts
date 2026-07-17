import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { ItemFlagMapWhereUniqueInput } from './item-flag-map-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { ItemFlagMapUpdateWithoutFlagInput } from './item-flag-map-update-without-flag.input';
import { ItemFlagMapCreateWithoutFlagInput } from './item-flag-map-create-without-flag.input';

@InputType()
export class ItemFlagMapUpsertWithWhereUniqueWithoutFlagInput {

    @Field(() => ItemFlagMapWhereUniqueInput, {nullable:false})
    @Type(() => ItemFlagMapWhereUniqueInput)
    where!: Prisma.AtLeast<ItemFlagMapWhereUniqueInput, 'item_id'>;

    @Field(() => ItemFlagMapUpdateWithoutFlagInput, {nullable:false})
    @Type(() => ItemFlagMapUpdateWithoutFlagInput)
    update!: Identity<ItemFlagMapUpdateWithoutFlagInput>;

    @Field(() => ItemFlagMapCreateWithoutFlagInput, {nullable:false})
    @Type(() => ItemFlagMapCreateWithoutFlagInput)
    create!: Identity<ItemFlagMapCreateWithoutFlagInput>;
}
