import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class MoveMetaCount {

    @Field(() => Int, {nullable:false})
    statChanges?: number;
}
