import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemsCreateNestedOneWithoutFlagMapInput } from '../items/items-create-nested-one-without-flag-map.input';

@InputType()
export class ItemFlagMapCreateWithoutFlagInput {

    @Field(() => ItemsCreateNestedOneWithoutFlagMapInput, {nullable:false})
    item!: ItemsCreateNestedOneWithoutFlagMapInput;
}
