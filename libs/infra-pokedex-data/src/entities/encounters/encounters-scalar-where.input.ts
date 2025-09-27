import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
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
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    version_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    location_area_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    encounter_slot_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    pokemon_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    min_level?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    max_level?: IntFilter;
}
