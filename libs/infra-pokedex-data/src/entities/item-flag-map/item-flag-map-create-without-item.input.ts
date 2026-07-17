import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ItemFlagsCreateNestedOneWithoutFlagMapInput } from '../item-flags/item-flags-create-nested-one-without-flag-map.input';

@InputType()
export class ItemFlagMapCreateWithoutItemInput {

    @Field(() => ItemFlagsCreateNestedOneWithoutFlagMapInput, {nullable:false})
    flag!: Identity<ItemFlagsCreateNestedOneWithoutFlagMapInput>;
}
