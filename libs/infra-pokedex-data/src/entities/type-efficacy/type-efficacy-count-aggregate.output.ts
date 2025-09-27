import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class TypeEfficacyCountAggregate {

    @Field(() => Int, {nullable:false})
    damage_type_id!: number;

    @Field(() => Int, {nullable:false})
    target_type_id!: number;

    @Field(() => Int, {nullable:false})
    damage_factor!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
