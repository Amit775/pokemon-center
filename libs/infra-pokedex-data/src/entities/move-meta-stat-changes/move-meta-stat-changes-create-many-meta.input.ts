import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class MoveMetaStatChangesCreateManyMetaInput {

    @Field(() => Int, {nullable:false})
    stat_id!: number;

    @Field(() => Int, {nullable:false})
    change!: number;
}
