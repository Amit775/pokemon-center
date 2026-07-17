import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class NaturesCount {

    @Field(() => Int, {nullable:false})
    battleStylePreferences?: number;
}
