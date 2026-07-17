import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class GrowthRatesCount {

    @Field(() => Int, {nullable:false})
    species?: number;

    @Field(() => Int, {nullable:false})
    experience?: number;
}
