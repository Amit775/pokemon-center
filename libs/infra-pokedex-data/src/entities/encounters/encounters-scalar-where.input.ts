import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class EncountersScalarWhereInput {

    @Field(() => [EncountersScalarWhereInput], {nullable:true})
    AND?: Array<EncountersScalarWhereInput>;

    @Field(() => [EncountersScalarWhereInput], {nullable:true})
    OR?: Array<EncountersScalarWhereInput>;

    @Field(() => [EncountersScalarWhereInput], {nullable:true})
    NOT?: Array<EncountersScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    version_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    location_area_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    encounter_slot_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    pokemon_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    min_level?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    max_level?: Identity<IntFilter>;
}
