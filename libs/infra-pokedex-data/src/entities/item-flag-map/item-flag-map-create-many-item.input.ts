import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class ItemFlagMapCreateManyItemInput {

    @Field(() => Int, {nullable:false})
    item_flag_id!: number;
}
