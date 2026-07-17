import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemsCreateNestedOneWithoutFlagMapInput } from '../items/items-create-nested-one-without-flag-map.input';
import { ItemFlagsCreateNestedOneWithoutFlagMapInput } from '../item-flags/item-flags-create-nested-one-without-flag-map.input';

@InputType()
export class ItemFlagMapCreateInput {

    @Field(() => ItemsCreateNestedOneWithoutFlagMapInput, {nullable:false})
    item!: ItemsCreateNestedOneWithoutFlagMapInput;

    @Field(() => ItemFlagsCreateNestedOneWithoutFlagMapInput, {nullable:false})
    flag!: ItemFlagsCreateNestedOneWithoutFlagMapInput;
}
