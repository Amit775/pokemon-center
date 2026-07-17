import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ItemFlingEffectsUpdateWithoutItemsInput } from './item-fling-effects-update-without-items.input';
import { Type } from 'class-transformer';
import { ItemFlingEffectsCreateWithoutItemsInput } from './item-fling-effects-create-without-items.input';
import { ItemFlingEffectsWhereInput } from './item-fling-effects-where.input';

@InputType()
export class ItemFlingEffectsUpsertWithoutItemsInput {

    @Field(() => ItemFlingEffectsUpdateWithoutItemsInput, {nullable:false})
    @Type(() => ItemFlingEffectsUpdateWithoutItemsInput)
    update!: Identity<ItemFlingEffectsUpdateWithoutItemsInput>;

    @Field(() => ItemFlingEffectsCreateWithoutItemsInput, {nullable:false})
    @Type(() => ItemFlingEffectsCreateWithoutItemsInput)
    create!: Identity<ItemFlingEffectsCreateWithoutItemsInput>;

    @Field(() => ItemFlingEffectsWhereInput, {nullable:true})
    @Type(() => ItemFlingEffectsWhereInput)
    where?: Identity<ItemFlingEffectsWhereInput>;
}
