import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class MoveMetaAilmentsCount {

    @Field(() => Int, {nullable:false})
    meta?: number;
}
