import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { EncounterConditionValuesWhereInput } from './encounter-condition-values-where.input';
import { Type } from 'class-transformer';
import { EncounterConditionValuesUpdateWithoutConditionValueMapInput } from './encounter-condition-values-update-without-condition-value-map.input';

@InputType()
export class EncounterConditionValuesUpdateToOneWithWhereWithoutConditionValueMapInput {

    @Field(() => EncounterConditionValuesWhereInput, {nullable:true})
    @Type(() => EncounterConditionValuesWhereInput)
    where?: Identity<EncounterConditionValuesWhereInput>;

    @Field(() => EncounterConditionValuesUpdateWithoutConditionValueMapInput, {nullable:false})
    @Type(() => EncounterConditionValuesUpdateWithoutConditionValueMapInput)
    data!: Identity<EncounterConditionValuesUpdateWithoutConditionValueMapInput>;
}
