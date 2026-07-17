import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ItemsUncheckedUpdateManyWithoutFlingEffectNestedInput } from '../items/items-unchecked-update-many-without-fling-effect-nested.input';

@InputType()
export class ItemFlingEffectsUncheckedUpdateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => ItemsUncheckedUpdateManyWithoutFlingEffectNestedInput, {nullable:true})
    items?: Identity<ItemsUncheckedUpdateManyWithoutFlingEffectNestedInput>;
}
