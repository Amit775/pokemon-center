import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ItemFlagMapWhereUniqueInput } from './item-flag-map-where-unique.input';
import { Type } from 'class-transformer';
import { ItemFlagMapUpdateWithoutItemInput } from './item-flag-map-update-without-item.input';

@InputType()
export class ItemFlagMapUpdateWithWhereUniqueWithoutItemInput {

    @Field(() => ItemFlagMapWhereUniqueInput, {nullable:false})
    @Type(() => ItemFlagMapWhereUniqueInput)
    where!: Prisma.AtLeast<ItemFlagMapWhereUniqueInput, 'item_id'>;

    @Field(() => ItemFlagMapUpdateWithoutItemInput, {nullable:false})
    @Type(() => ItemFlagMapUpdateWithoutItemInput)
    data!: ItemFlagMapUpdateWithoutItemInput;
}
