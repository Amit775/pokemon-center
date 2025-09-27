import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class TypeEfficacySumAggregate {

    @Field(() => Int, {nullable:true})
    damage_type_id?: number;

    @Field(() => Int, {nullable:true})
    target_type_id?: number;

    @Field(() => Int, {nullable:true})
    damage_factor?: number;
}
