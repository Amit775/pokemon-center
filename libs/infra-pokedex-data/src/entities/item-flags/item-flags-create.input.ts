import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ItemFlagMapCreateNestedManyWithoutFlagInput } from '../item-flag-map/item-flag-map-create-nested-many-without-flag.input';

@InputType()
export class ItemFlagsCreateInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => ItemFlagMapCreateNestedManyWithoutFlagInput, {nullable:true})
    flagMap?: ItemFlagMapCreateNestedManyWithoutFlagInput;
}
