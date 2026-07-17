import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class EncounterConditionValueMapCreateManyInput {

    @Field(() => Int, {nullable:false})
    encounter_id!: number;

    @Field(() => Int, {nullable:false})
    encounter_condition_value_id!: number;
}
