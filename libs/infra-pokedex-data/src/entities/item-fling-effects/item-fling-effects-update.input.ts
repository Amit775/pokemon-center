import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ItemsUpdateManyWithoutFlingEffectNestedInput } from '../items/items-update-many-without-fling-effect-nested.input';

@InputType()
export class ItemFlingEffectsUpdateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => ItemsUpdateManyWithoutFlingEffectNestedInput, {nullable:true})
    items?: Identity<ItemsUpdateManyWithoutFlingEffectNestedInput>;
}
