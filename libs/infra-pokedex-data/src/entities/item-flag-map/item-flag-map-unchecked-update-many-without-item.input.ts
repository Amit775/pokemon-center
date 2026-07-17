import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class ItemFlagMapUncheckedUpdateManyWithoutItemInput {

    @Field(() => Int, {nullable:true})
    item_flag_id?: number;
}
