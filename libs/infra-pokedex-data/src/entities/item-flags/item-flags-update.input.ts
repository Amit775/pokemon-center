import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ItemFlagMapUpdateManyWithoutFlagNestedInput } from '../item-flag-map/item-flag-map-update-many-without-flag-nested.input';

@InputType()
export class ItemFlagsUpdateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => ItemFlagMapUpdateManyWithoutFlagNestedInput, {nullable:true})
    flagMap?: Identity<ItemFlagMapUpdateManyWithoutFlagNestedInput>;
}
