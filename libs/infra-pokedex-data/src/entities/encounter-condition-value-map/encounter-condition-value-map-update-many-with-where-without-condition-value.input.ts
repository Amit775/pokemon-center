import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { EncounterConditionValueMapScalarWhereInput } from './encounter-condition-value-map-scalar-where.input';
import { Type } from 'class-transformer';
import { EncounterConditionValueMapUncheckedUpdateManyWithoutConditionValueInput } from './encounter-condition-value-map-unchecked-update-many-without-condition-value.input';

@InputType()
export class EncounterConditionValueMapUpdateManyWithWhereWithoutConditionValueInput {

    @Field(() => EncounterConditionValueMapScalarWhereInput, {nullable:false})
    @Type(() => EncounterConditionValueMapScalarWhereInput)
    where!: Identity<EncounterConditionValueMapScalarWhereInput>;

    @Field(() => EncounterConditionValueMapUncheckedUpdateManyWithoutConditionValueInput, {nullable:false})
    @Type(() => EncounterConditionValueMapUncheckedUpdateManyWithoutConditionValueInput)
    data!: Identity<EncounterConditionValueMapUncheckedUpdateManyWithoutConditionValueInput>;
}
