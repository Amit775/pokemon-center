import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class EncountersCount {

    @Field(() => Int, {nullable:false})
    conditionValueMap?: number;
}
