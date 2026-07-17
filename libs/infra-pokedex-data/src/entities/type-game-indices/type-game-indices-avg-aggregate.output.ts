import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class TypeGameIndicesAvgAggregate {

    @Field(() => Float, {nullable:true})
    type_id?: number;

    @Field(() => Float, {nullable:true})
    generation_id?: number;

    @Field(() => Float, {nullable:true})
    game_index?: number;
}
