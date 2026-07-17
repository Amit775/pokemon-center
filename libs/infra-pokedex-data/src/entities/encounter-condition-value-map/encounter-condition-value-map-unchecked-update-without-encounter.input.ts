import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class EncounterConditionValueMapUncheckedUpdateWithoutEncounterInput {

    @Field(() => Int, {nullable:true})
    encounter_condition_value_id?: number;
}
