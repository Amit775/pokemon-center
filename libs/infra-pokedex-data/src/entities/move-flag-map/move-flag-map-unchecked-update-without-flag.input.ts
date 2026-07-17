import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class MoveFlagMapUncheckedUpdateWithoutFlagInput {

    @Field(() => Int, {nullable:true})
    move_id?: number;
}
