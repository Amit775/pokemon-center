import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class MoveFlagMapUncheckedUpdateWithoutMoveInput {

    @Field(() => Int, {nullable:true})
    move_flag_id?: number;
}
