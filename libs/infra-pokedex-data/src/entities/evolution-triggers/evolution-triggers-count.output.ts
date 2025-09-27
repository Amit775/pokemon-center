import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class EvolutionTriggersCount {

    @Field(() => Int, {nullable:false})
    evolution?: number;
}
