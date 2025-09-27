import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class EncounterConditionValueMapCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    encounter_id?: true;

    @Field(() => Boolean, {nullable:true})
    encounter_condition_value_id?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
