import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EncounterConditionValueMapScalarWhereInput } from './encounter-condition-value-map-scalar-where.input';
import { Type } from 'class-transformer';
import { EncounterConditionValueMapUncheckedUpdateManyWithoutEncounterInput } from './encounter-condition-value-map-unchecked-update-many-without-encounter.input';

@InputType()
export class EncounterConditionValueMapUpdateManyWithWhereWithoutEncounterInput {

    @Field(() => EncounterConditionValueMapScalarWhereInput, {nullable:false})
    @Type(() => EncounterConditionValueMapScalarWhereInput)
    where!: EncounterConditionValueMapScalarWhereInput;

    @Field(() => EncounterConditionValueMapUncheckedUpdateManyWithoutEncounterInput, {nullable:false})
    @Type(() => EncounterConditionValueMapUncheckedUpdateManyWithoutEncounterInput)
    data!: EncounterConditionValueMapUncheckedUpdateManyWithoutEncounterInput;
}
