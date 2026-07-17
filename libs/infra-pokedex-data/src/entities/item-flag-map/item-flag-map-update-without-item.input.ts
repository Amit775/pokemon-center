import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ItemFlagsUpdateOneRequiredWithoutFlagMapNestedInput } from '../item-flags/item-flags-update-one-required-without-flag-map-nested.input';

@InputType()
export class ItemFlagMapUpdateWithoutItemInput {

    @Field(() => ItemFlagsUpdateOneRequiredWithoutFlagMapNestedInput, {nullable:true})
    flag?: Identity<ItemFlagsUpdateOneRequiredWithoutFlagMapNestedInput>;
}
