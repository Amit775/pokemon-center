import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ItemsCreateNestedOneWithoutFlagMapInput } from '../items/items-create-nested-one-without-flag-map.input';
import { ItemFlagsCreateNestedOneWithoutFlagMapInput } from '../item-flags/item-flags-create-nested-one-without-flag-map.input';

@InputType()
export class ItemFlagMapCreateInput {

    @Field(() => ItemsCreateNestedOneWithoutFlagMapInput, {nullable:false})
    item!: Identity<ItemsCreateNestedOneWithoutFlagMapInput>;

    @Field(() => ItemFlagsCreateNestedOneWithoutFlagMapInput, {nullable:false})
    flag!: Identity<ItemFlagsCreateNestedOneWithoutFlagMapInput>;
}
