import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class EncounterConditionValueMapMinAggregate {

    @Field(() => Int, {nullable:true})
    encounter_id?: number;

    @Field(() => Int, {nullable:true})
    encounter_condition_value_id?: number;
}
