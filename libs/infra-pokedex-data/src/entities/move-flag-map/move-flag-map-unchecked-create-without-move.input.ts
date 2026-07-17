import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class MoveFlagMapUncheckedCreateWithoutMoveInput {

    @Field(() => Int, {nullable:false})
    move_flag_id!: number;
}
