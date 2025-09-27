import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class MoveTargetsCount {

    @Field(() => Int, {nullable:false})
    moves?: number;
}
