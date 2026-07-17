import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { ItemFlagMapWhereUniqueInput } from './item-flag-map-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { ItemFlagMapUpdateWithoutItemInput } from './item-flag-map-update-without-item.input';

@InputType()
export class ItemFlagMapUpdateWithWhereUniqueWithoutItemInput {

    @Field(() => ItemFlagMapWhereUniqueInput, {nullable:false})
    @Type(() => ItemFlagMapWhereUniqueInput)
    where!: Prisma.AtLeast<ItemFlagMapWhereUniqueInput, 'item_id'>;

    @Field(() => ItemFlagMapUpdateWithoutItemInput, {nullable:false})
    @Type(() => ItemFlagMapUpdateWithoutItemInput)
    data!: Identity<ItemFlagMapUpdateWithoutItemInput>;
}
