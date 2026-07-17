import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { EncountersCreateNestedOneWithoutConditionValueMapInput } from '../encounters/encounters-create-nested-one-without-condition-value-map.input';

@InputType()
export class EncounterConditionValueMapCreateWithoutConditionValueInput {

    @Field(() => EncountersCreateNestedOneWithoutConditionValueMapInput, {nullable:false})
    encounter!: Identity<EncountersCreateNestedOneWithoutConditionValueMapInput>;
}
