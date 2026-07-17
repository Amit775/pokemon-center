import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class EncounterConditionValueMapUncheckedUpdateManyWithoutConditionValueInput {

    @Field(() => Int, {nullable:true})
    encounter_id?: number;
}
