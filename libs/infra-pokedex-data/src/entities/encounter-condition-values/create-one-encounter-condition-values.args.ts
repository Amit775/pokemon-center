import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { EncounterConditionValuesCreateInput } from './encounter-condition-values-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneEncounterConditionValuesArgs {

    @Field(() => EncounterConditionValuesCreateInput, {nullable:false})
    @Type(() => EncounterConditionValuesCreateInput)
    data!: Identity<EncounterConditionValuesCreateInput>;
}
