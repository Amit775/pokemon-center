import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EncounterConditionValuesCreateManyConditionInput } from './encounter-condition-values-create-many-condition.input';
import { Type } from 'class-transformer';

@InputType()
export class EncounterConditionValuesCreateManyConditionInputEnvelope {

    @Field(() => [EncounterConditionValuesCreateManyConditionInput], {nullable:false})
    @Type(() => EncounterConditionValuesCreateManyConditionInput)
    data!: Array<EncounterConditionValuesCreateManyConditionInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
