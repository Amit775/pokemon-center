import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { EncounterConditionValueMapCreateInput } from './encounter-condition-value-map-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneEncounterConditionValueMapArgs {

    @Field(() => EncounterConditionValueMapCreateInput, {nullable:false})
    @Type(() => EncounterConditionValueMapCreateInput)
    data!: Identity<EncounterConditionValueMapCreateInput>;
}
