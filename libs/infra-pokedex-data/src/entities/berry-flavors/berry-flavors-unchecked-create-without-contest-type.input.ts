import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class BerryFlavorsUncheckedCreateWithoutContestTypeInput {

    @Field(() => Int, {nullable:false})
    berry_id!: number;

    @Field(() => Int, {nullable:false})
    flavor!: number;
}
