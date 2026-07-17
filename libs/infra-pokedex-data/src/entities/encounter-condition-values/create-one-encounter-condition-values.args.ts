import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EncounterConditionValuesCreateInput } from './encounter-condition-values-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneEncounterConditionValuesArgs {

    @Field(() => EncounterConditionValuesCreateInput, {nullable:false})
    @Type(() => EncounterConditionValuesCreateInput)
    data!: EncounterConditionValuesCreateInput;
}
