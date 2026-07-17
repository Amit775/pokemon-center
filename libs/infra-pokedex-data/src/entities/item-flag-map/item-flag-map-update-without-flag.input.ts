import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemsUpdateOneRequiredWithoutFlagMapNestedInput } from '../items/items-update-one-required-without-flag-map-nested.input';

@InputType()
export class ItemFlagMapUpdateWithoutFlagInput {

    @Field(() => ItemsUpdateOneRequiredWithoutFlagMapNestedInput, {nullable:true})
    item?: ItemsUpdateOneRequiredWithoutFlagMapNestedInput;
}
