import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class MoveBattleStylesCount {

    @Field(() => Int, {nullable:false})
    naturePreferences?: number;
}
