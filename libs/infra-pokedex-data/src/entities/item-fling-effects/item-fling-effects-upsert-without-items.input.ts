import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemFlingEffectsUpdateWithoutItemsInput } from './item-fling-effects-update-without-items.input';
import { Type } from 'class-transformer';
import { ItemFlingEffectsCreateWithoutItemsInput } from './item-fling-effects-create-without-items.input';
import { ItemFlingEffectsWhereInput } from './item-fling-effects-where.input';

@InputType()
export class ItemFlingEffectsUpsertWithoutItemsInput {

    @Field(() => ItemFlingEffectsUpdateWithoutItemsInput, {nullable:false})
    @Type(() => ItemFlingEffectsUpdateWithoutItemsInput)
    update!: ItemFlingEffectsUpdateWithoutItemsInput;

    @Field(() => ItemFlingEffectsCreateWithoutItemsInput, {nullable:false})
    @Type(() => ItemFlingEffectsCreateWithoutItemsInput)
    create!: ItemFlingEffectsCreateWithoutItemsInput;

    @Field(() => ItemFlingEffectsWhereInput, {nullable:true})
    @Type(() => ItemFlingEffectsWhereInput)
    where?: ItemFlingEffectsWhereInput;
}
