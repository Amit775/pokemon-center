import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { ItemFlagMapWhereUniqueInput } from './item-flag-map-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { ItemFlagMapCreateInput } from './item-flag-map-create.input';
import { ItemFlagMapUpdateInput } from './item-flag-map-update.input';

@ArgsType()
export class UpsertOneItemFlagMapArgs {

    @Field(() => ItemFlagMapWhereUniqueInput, {nullable:false})
    @Type(() => ItemFlagMapWhereUniqueInput)
    where!: Prisma.AtLeast<ItemFlagMapWhereUniqueInput, 'item_id'>;

    @Field(() => ItemFlagMapCreateInput, {nullable:false})
    @Type(() => ItemFlagMapCreateInput)
    create!: Identity<ItemFlagMapCreateInput>;

    @Field(() => ItemFlagMapUpdateInput, {nullable:false})
    @Type(() => ItemFlagMapUpdateInput)
    update!: Identity<ItemFlagMapUpdateInput>;
}
