import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ItemsCreateNestedManyWithoutFlingEffectInput } from '../items/items-create-nested-many-without-fling-effect.input';

@InputType()
export class ItemFlingEffectsCreateInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => ItemsCreateNestedManyWithoutFlingEffectInput, {nullable:true})
    items?: Identity<ItemsCreateNestedManyWithoutFlingEffectInput>;
}
