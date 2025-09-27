import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class MoveMetaStatChangesAvgAggregate {

    @Field(() => Float, {nullable:true})
    move_id?: number;

    @Field(() => Float, {nullable:true})
    stat_id?: number;

    @Field(() => Float, {nullable:true})
    change?: number;
}
