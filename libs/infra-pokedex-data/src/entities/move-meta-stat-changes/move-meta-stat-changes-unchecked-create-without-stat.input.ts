import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class MoveMetaStatChangesUncheckedCreateWithoutStatInput {

    @Field(() => Int, {nullable:false})
    move_id!: number;

    @Field(() => Int, {nullable:false})
    change!: number;
}
