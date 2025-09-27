import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class BerryFlavorsCountAggregate {

    @Field(() => Int, {nullable:false})
    berry_id!: number;

    @Field(() => Int, {nullable:false})
    contest_type_id!: number;

    @Field(() => Int, {nullable:false})
    flavor!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
