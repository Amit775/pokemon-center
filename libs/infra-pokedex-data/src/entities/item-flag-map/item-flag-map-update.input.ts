import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemsUpdateOneRequiredWithoutFlagMapNestedInput } from '../items/items-update-one-required-without-flag-map-nested.input';
import { ItemFlagsUpdateOneRequiredWithoutFlagMapNestedInput } from '../item-flags/item-flags-update-one-required-without-flag-map-nested.input';

@InputType()
export class ItemFlagMapUpdateInput {

    @Field(() => ItemsUpdateOneRequiredWithoutFlagMapNestedInput, {nullable:true})
    item?: ItemsUpdateOneRequiredWithoutFlagMapNestedInput;

    @Field(() => ItemFlagsUpdateOneRequiredWithoutFlagMapNestedInput, {nullable:true})
    flag?: ItemFlagsUpdateOneRequiredWithoutFlagMapNestedInput;
}
