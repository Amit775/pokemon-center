import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { ItemFlagMapWhereUniqueInput } from './item-flag-map-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { ItemFlagMapCreateWithoutFlagInput } from './item-flag-map-create-without-flag.input';

@InputType()
export class ItemFlagMapCreateOrConnectWithoutFlagInput {

    @Field(() => ItemFlagMapWhereUniqueInput, {nullable:false})
    @Type(() => ItemFlagMapWhereUniqueInput)
    where!: Prisma.AtLeast<ItemFlagMapWhereUniqueInput, 'item_id'>;

    @Field(() => ItemFlagMapCreateWithoutFlagInput, {nullable:false})
    @Type(() => ItemFlagMapCreateWithoutFlagInput)
    create!: Identity<ItemFlagMapCreateWithoutFlagInput>;
}
