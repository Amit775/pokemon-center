import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class EncounterConditionValuesScalarWhereInput {

    @Field(() => [EncounterConditionValuesScalarWhereInput], {nullable:true})
    AND?: Array<EncounterConditionValuesScalarWhereInput>;

    @Field(() => [EncounterConditionValuesScalarWhereInput], {nullable:true})
    OR?: Array<EncounterConditionValuesScalarWhereInput>;

    @Field(() => [EncounterConditionValuesScalarWhereInput], {nullable:true})
    NOT?: Array<EncounterConditionValuesScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    encounter_condition_id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    identifier?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    is_default?: IntFilter;
}
