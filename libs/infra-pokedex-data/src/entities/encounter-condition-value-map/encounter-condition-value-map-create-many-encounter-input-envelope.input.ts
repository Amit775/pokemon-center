import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EncounterConditionValueMapCreateManyEncounterInput } from './encounter-condition-value-map-create-many-encounter.input';
import { Type } from 'class-transformer';

@InputType()
export class EncounterConditionValueMapCreateManyEncounterInputEnvelope {

    @Field(() => [EncounterConditionValueMapCreateManyEncounterInput], {nullable:false})
    @Type(() => EncounterConditionValueMapCreateManyEncounterInput)
    data!: Array<EncounterConditionValueMapCreateManyEncounterInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
