import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class MoveFlagsCount {

    @Field(() => Int, {nullable:false})
    flagMap?: number;
}
