import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { EncounterConditionValueMapWhereUniqueInput } from './encounter-condition-value-map-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { EncounterConditionValueMapCreateInput } from './encounter-condition-value-map-create.input';
import { EncounterConditionValueMapUpdateInput } from './encounter-condition-value-map-update.input';

@ArgsType()
export class UpsertOneEncounterConditionValueMapArgs {

    @Field(() => EncounterConditionValueMapWhereUniqueInput, {nullable:false})
    @Type(() => EncounterConditionValueMapWhereUniqueInput)
    where!: Prisma.AtLeast<EncounterConditionValueMapWhereUniqueInput, 'encounter_id'>;

    @Field(() => EncounterConditionValueMapCreateInput, {nullable:false})
    @Type(() => EncounterConditionValueMapCreateInput)
    create!: Identity<EncounterConditionValueMapCreateInput>;

    @Field(() => EncounterConditionValueMapUpdateInput, {nullable:false})
    @Type(() => EncounterConditionValueMapUpdateInput)
    update!: Identity<EncounterConditionValueMapUpdateInput>;
}
