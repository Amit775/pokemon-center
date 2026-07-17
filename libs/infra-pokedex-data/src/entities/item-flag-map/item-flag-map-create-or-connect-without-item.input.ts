import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { ItemFlagMapWhereUniqueInput } from './item-flag-map-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { ItemFlagMapCreateWithoutItemInput } from './item-flag-map-create-without-item.input';

@InputType()
export class ItemFlagMapCreateOrConnectWithoutItemInput {

    @Field(() => ItemFlagMapWhereUniqueInput, {nullable:false})
    @Type(() => ItemFlagMapWhereUniqueInput)
    where!: Prisma.AtLeast<ItemFlagMapWhereUniqueInput, 'item_id'>;

    @Field(() => ItemFlagMapCreateWithoutItemInput, {nullable:false})
    @Type(() => ItemFlagMapCreateWithoutItemInput)
    create!: Identity<ItemFlagMapCreateWithoutItemInput>;
}
