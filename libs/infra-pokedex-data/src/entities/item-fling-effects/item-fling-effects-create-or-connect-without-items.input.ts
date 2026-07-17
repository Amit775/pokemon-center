import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ItemFlingEffectsWhereUniqueInput } from './item-fling-effects-where-unique.input';
import { Type } from 'class-transformer';
import { ItemFlingEffectsCreateWithoutItemsInput } from './item-fling-effects-create-without-items.input';

@InputType()
export class ItemFlingEffectsCreateOrConnectWithoutItemsInput {

    @Field(() => ItemFlingEffectsWhereUniqueInput, {nullable:false})
    @Type(() => ItemFlingEffectsWhereUniqueInput)
    where!: Prisma.AtLeast<ItemFlingEffectsWhereUniqueInput, 'id'>;

    @Field(() => ItemFlingEffectsCreateWithoutItemsInput, {nullable:false})
    @Type(() => ItemFlingEffectsCreateWithoutItemsInput)
    create!: ItemFlingEffectsCreateWithoutItemsInput;
}
