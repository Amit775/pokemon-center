import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class MoveFlagMapUncheckedCreateWithoutFlagInput {

    @Field(() => Int, {nullable:false})
    move_id!: number;
}
