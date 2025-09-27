import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class SuperContestEffectsCount {

    @Field(() => Int, {nullable:false})
    moves?: number;
}
