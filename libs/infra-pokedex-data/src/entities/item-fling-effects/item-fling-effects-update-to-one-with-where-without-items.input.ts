import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemFlingEffectsWhereInput } from './item-fling-effects-where.input';
import { Type } from 'class-transformer';
import { ItemFlingEffectsUpdateWithoutItemsInput } from './item-fling-effects-update-without-items.input';

@InputType()
export class ItemFlingEffectsUpdateToOneWithWhereWithoutItemsInput {

    @Field(() => ItemFlingEffectsWhereInput, {nullable:true})
    @Type(() => ItemFlingEffectsWhereInput)
    where?: ItemFlingEffectsWhereInput;

    @Field(() => ItemFlingEffectsUpdateWithoutItemsInput, {nullable:false})
    @Type(() => ItemFlingEffectsUpdateWithoutItemsInput)
    data!: ItemFlingEffectsUpdateWithoutItemsInput;
}
