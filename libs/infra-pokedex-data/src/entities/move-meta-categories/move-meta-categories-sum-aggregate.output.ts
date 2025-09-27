import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class MoveMetaCategoriesSumAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;
}
