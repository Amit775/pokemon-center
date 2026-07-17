import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class ItemFlagMapUncheckedUpdateWithoutFlagInput {

    @Field(() => Int, {nullable:true})
    item_id?: number;
}
