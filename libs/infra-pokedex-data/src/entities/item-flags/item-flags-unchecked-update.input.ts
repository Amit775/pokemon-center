import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ItemFlagMapUncheckedUpdateManyWithoutFlagNestedInput } from '../item-flag-map/item-flag-map-unchecked-update-many-without-flag-nested.input';

@InputType()
export class ItemFlagsUncheckedUpdateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => ItemFlagMapUncheckedUpdateManyWithoutFlagNestedInput, {nullable:true})
    flagMap?: Identity<ItemFlagMapUncheckedUpdateManyWithoutFlagNestedInput>;
}
