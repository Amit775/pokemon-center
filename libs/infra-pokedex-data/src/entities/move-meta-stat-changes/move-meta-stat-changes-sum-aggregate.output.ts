import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class MoveMetaStatChangesSumAggregate {

    @Field(() => Int, {nullable:true})
    move_id?: number;

    @Field(() => Int, {nullable:true})
    stat_id?: number;

    @Field(() => Int, {nullable:true})
    change?: number;
}
