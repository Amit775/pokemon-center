import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class EncounterConditionValueMapUncheckedCreateWithoutConditionValueInput {

    @Field(() => Int, {nullable:false})
    encounter_id!: number;
}
