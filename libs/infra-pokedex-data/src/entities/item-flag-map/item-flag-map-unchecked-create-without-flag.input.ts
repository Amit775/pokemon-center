import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class ItemFlagMapUncheckedCreateWithoutFlagInput {

    @Field(() => Int, {nullable:false})
    item_id!: number;
}
