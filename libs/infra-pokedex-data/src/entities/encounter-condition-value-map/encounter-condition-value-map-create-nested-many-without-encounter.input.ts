import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EncounterConditionValueMapCreateWithoutEncounterInput } from './encounter-condition-value-map-create-without-encounter.input';
import { Type } from 'class-transformer';
import { EncounterConditionValueMapCreateOrConnectWithoutEncounterInput } from './encounter-condition-value-map-create-or-connect-without-encounter.input';
import type { Identity } from 'identity-type';
import { EncounterConditionValueMapCreateManyEncounterInputEnvelope } from './encounter-condition-value-map-create-many-encounter-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { EncounterConditionValueMapWhereUniqueInput } from './encounter-condition-value-map-where-unique.input';

@InputType()
export class EncounterConditionValueMapCreateNestedManyWithoutEncounterInput {

    @Field(() => [EncounterConditionValueMapCreateWithoutEncounterInput], {nullable:true})
    @Type(() => EncounterConditionValueMapCreateWithoutEncounterInput)
    create?: Array<EncounterConditionValueMapCreateWithoutEncounterInput>;

    @Field(() => [EncounterConditionValueMapCreateOrConnectWithoutEncounterInput], {nullable:true})
    @Type(() => EncounterConditionValueMapCreateOrConnectWithoutEncounterInput)
    connectOrCreate?: Array<EncounterConditionValueMapCreateOrConnectWithoutEncounterInput>;

    @Field(() => EncounterConditionValueMapCreateManyEncounterInputEnvelope, {nullable:true})
    @Type(() => EncounterConditionValueMapCreateManyEncounterInputEnvelope)
    createMany?: Identity<EncounterConditionValueMapCreateManyEncounterInputEnvelope>;

    @Field(() => [EncounterConditionValueMapWhereUniqueInput], {nullable:true})
    @Type(() => EncounterConditionValueMapWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<EncounterConditionValueMapWhereUniqueInput, 'encounter_id'>>;
}
