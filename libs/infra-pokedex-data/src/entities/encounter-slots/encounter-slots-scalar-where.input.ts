import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';

@InputType()
export class EncounterSlotsScalarWhereInput {

    @Field(() => [EncounterSlotsScalarWhereInput], {nullable:true})
    AND?: Array<EncounterSlotsScalarWhereInput>;

    @Field(() => [EncounterSlotsScalarWhereInput], {nullable:true})
    OR?: Array<EncounterSlotsScalarWhereInput>;

    @Field(() => [EncounterSlotsScalarWhereInput], {nullable:true})
    NOT?: Array<EncounterSlotsScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    version_group_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    encounter_method_id?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    slot?: IntNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    rarity?: IntFilter;
}
