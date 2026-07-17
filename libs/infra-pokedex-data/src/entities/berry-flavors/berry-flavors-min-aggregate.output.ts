import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class BerryFlavorsMinAggregate {

    @Field(() => Int, {nullable:true})
    berry_id?: number;

    @Field(() => Int, {nullable:true})
    contest_type_id?: number;

    @Field(() => Int, {nullable:true})
    flavor?: number;
}
