import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class MoveFlagMapAvgAggregate {

    @Field(() => Float, {nullable:true})
    move_id?: number;

    @Field(() => Float, {nullable:true})
    move_flag_id?: number;
}
