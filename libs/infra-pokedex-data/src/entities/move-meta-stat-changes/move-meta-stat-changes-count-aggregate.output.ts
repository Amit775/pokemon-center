import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class MoveMetaStatChangesCountAggregate {

    @Field(() => Int, {nullable:false})
    move_id!: number;

    @Field(() => Int, {nullable:false})
    stat_id!: number;

    @Field(() => Int, {nullable:false})
    change!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
