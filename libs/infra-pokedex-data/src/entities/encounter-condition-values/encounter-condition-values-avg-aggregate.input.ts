import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class EncounterConditionValuesAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    encounter_condition_id?: true;

    @Field(() => Boolean, {nullable:true})
    is_default?: true;
}
