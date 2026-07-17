import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ItemFlingEffectsWhereInput } from './item-fling-effects-where.input';
import { Type } from 'class-transformer';
import { ItemFlingEffectsUpdateWithoutItemsInput } from './item-fling-effects-update-without-items.input';

@InputType()
export class ItemFlingEffectsUpdateToOneWithWhereWithoutItemsInput {

    @Field(() => ItemFlingEffectsWhereInput, {nullable:true})
    @Type(() => ItemFlingEffectsWhereInput)
    where?: Identity<ItemFlingEffectsWhereInput>;

    @Field(() => ItemFlingEffectsUpdateWithoutItemsInput, {nullable:false})
    @Type(() => ItemFlingEffectsUpdateWithoutItemsInput)
    data!: Identity<ItemFlingEffectsUpdateWithoutItemsInput>;
}
