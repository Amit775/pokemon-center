import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { EncounterConditionValuesUpdateWithoutConditionValueMapInput } from './encounter-condition-values-update-without-condition-value-map.input';
import { Type } from 'class-transformer';
import { EncounterConditionValuesCreateWithoutConditionValueMapInput } from './encounter-condition-values-create-without-condition-value-map.input';
import { EncounterConditionValuesWhereInput } from './encounter-condition-values-where.input';

@InputType()
export class EncounterConditionValuesUpsertWithoutConditionValueMapInput {

    @Field(() => EncounterConditionValuesUpdateWithoutConditionValueMapInput, {nullable:false})
    @Type(() => EncounterConditionValuesUpdateWithoutConditionValueMapInput)
    update!: Identity<EncounterConditionValuesUpdateWithoutConditionValueMapInput>;

    @Field(() => EncounterConditionValuesCreateWithoutConditionValueMapInput, {nullable:false})
    @Type(() => EncounterConditionValuesCreateWithoutConditionValueMapInput)
    create!: Identity<EncounterConditionValuesCreateWithoutConditionValueMapInput>;

    @Field(() => EncounterConditionValuesWhereInput, {nullable:true})
    @Type(() => EncounterConditionValuesWhereInput)
    where?: Identity<EncounterConditionValuesWhereInput>;
}
