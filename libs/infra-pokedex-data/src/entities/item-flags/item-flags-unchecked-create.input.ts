import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ItemFlagMapUncheckedCreateNestedManyWithoutFlagInput } from '../item-flag-map/item-flag-map-unchecked-create-nested-many-without-flag.input';

@InputType()
export class ItemFlagsUncheckedCreateInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => ItemFlagMapUncheckedCreateNestedManyWithoutFlagInput, {nullable:true})
    flagMap?: ItemFlagMapUncheckedCreateNestedManyWithoutFlagInput;
}
