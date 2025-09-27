import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class MoveDamageClassesCount {

    @Field(() => Int, {nullable:false})
    moves?: number;

    @Field(() => Int, {nullable:false})
    types?: number;
}
