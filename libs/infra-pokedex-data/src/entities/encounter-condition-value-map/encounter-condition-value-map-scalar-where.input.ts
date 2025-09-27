import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class EncounterConditionValueMapScalarWhereInput {

    @Field(() => [EncounterConditionValueMapScalarWhereInput], {nullable:true})
    AND?: Array<EncounterConditionValueMapScalarWhereInput>;

    @Field(() => [EncounterConditionValueMapScalarWhereInput], {nullable:true})
    OR?: Array<EncounterConditionValueMapScalarWhereInput>;

    @Field(() => [EncounterConditionValueMapScalarWhereInput], {nullable:true})
    NOT?: Array<EncounterConditionValueMapScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    encounter_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    encounter_condition_value_id?: IntFilter;
}
