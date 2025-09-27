import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class TypeEfficacyAvgAggregate {

    @Field(() => Float, {nullable:true})
    damage_type_id?: number;

    @Field(() => Float, {nullable:true})
    target_type_id?: number;

    @Field(() => Float, {nullable:true})
    damage_factor?: number;
}
