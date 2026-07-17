import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class ContestEffectsCreateWithoutMovesInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    appeal!: number;

    @Field(() => Int, {nullable:false})
    jam!: number;
}
