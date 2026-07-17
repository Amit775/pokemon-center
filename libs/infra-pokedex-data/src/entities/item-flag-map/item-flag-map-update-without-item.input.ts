import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemFlagsUpdateOneRequiredWithoutFlagMapNestedInput } from '../item-flags/item-flags-update-one-required-without-flag-map-nested.input';

@InputType()
export class ItemFlagMapUpdateWithoutItemInput {

    @Field(() => ItemFlagsUpdateOneRequiredWithoutFlagMapNestedInput, {nullable:true})
    flag?: ItemFlagsUpdateOneRequiredWithoutFlagMapNestedInput;
}
