import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EncounterConditionValueMapCreateManyConditionValueInput } from './encounter-condition-value-map-create-many-condition-value.input';
import { Type } from 'class-transformer';

@InputType()
export class EncounterConditionValueMapCreateManyConditionValueInputEnvelope {

    @Field(() => [EncounterConditionValueMapCreateManyConditionValueInput], {nullable:false})
    @Type(() => EncounterConditionValueMapCreateManyConditionValueInput)
    data!: Array<EncounterConditionValueMapCreateManyConditionValueInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
