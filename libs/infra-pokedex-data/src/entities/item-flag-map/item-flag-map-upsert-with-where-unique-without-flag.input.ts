import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ItemFlagMapWhereUniqueInput } from './item-flag-map-where-unique.input';
import { Type } from 'class-transformer';
import { ItemFlagMapUpdateWithoutFlagInput } from './item-flag-map-update-without-flag.input';
import { ItemFlagMapCreateWithoutFlagInput } from './item-flag-map-create-without-flag.input';

@InputType()
export class ItemFlagMapUpsertWithWhereUniqueWithoutFlagInput {

    @Field(() => ItemFlagMapWhereUniqueInput, {nullable:false})
    @Type(() => ItemFlagMapWhereUniqueInput)
    where!: Prisma.AtLeast<ItemFlagMapWhereUniqueInput, 'item_id'>;

    @Field(() => ItemFlagMapUpdateWithoutFlagInput, {nullable:false})
    @Type(() => ItemFlagMapUpdateWithoutFlagInput)
    update!: ItemFlagMapUpdateWithoutFlagInput;

    @Field(() => ItemFlagMapCreateWithoutFlagInput, {nullable:false})
    @Type(() => ItemFlagMapCreateWithoutFlagInput)
    create!: ItemFlagMapCreateWithoutFlagInput;
}
