import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class EncounterSlotsScalarWhereInput {

    @Field(() => [EncounterSlotsScalarWhereInput], {nullable:true})
    AND?: Array<EncounterSlotsScalarWhereInput>;

    @Field(() => [EncounterSlotsScalarWhereInput], {nullable:true})
    OR?: Array<EncounterSlotsScalarWhereInput>;

    @Field(() => [EncounterSlotsScalarWhereInput], {nullable:true})
    NOT?: Array<EncounterSlotsScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    version_group_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    encounter_method_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    slot?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    rarity?: Identity<IntFilter>;
}
