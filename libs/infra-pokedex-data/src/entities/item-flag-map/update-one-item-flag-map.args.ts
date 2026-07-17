import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ItemFlagMapUpdateInput } from './item-flag-map-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@pokemon-center/prisma';
import { ItemFlagMapWhereUniqueInput } from './item-flag-map-where-unique.input';

@ArgsType()
export class UpdateOneItemFlagMapArgs {

    @Field(() => ItemFlagMapUpdateInput, {nullable:false})
    @Type(() => ItemFlagMapUpdateInput)
    data!: Identity<ItemFlagMapUpdateInput>;

    @Field(() => ItemFlagMapWhereUniqueInput, {nullable:false})
    @Type(() => ItemFlagMapWhereUniqueInput)
    where!: Prisma.AtLeast<ItemFlagMapWhereUniqueInput, 'item_id'>;
}
