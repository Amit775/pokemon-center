import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class EncounterConditionValueMapCreateManyEncounterInput {

    @Field(() => Int, {nullable:false})
    encounter_condition_value_id!: number;
}
