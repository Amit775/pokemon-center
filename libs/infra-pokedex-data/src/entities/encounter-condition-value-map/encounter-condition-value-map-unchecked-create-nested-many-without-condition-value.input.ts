import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EncounterConditionValueMapCreateWithoutConditionValueInput } from './encounter-condition-value-map-create-without-condition-value.input';
import { Type } from 'class-transformer';
import { EncounterConditionValueMapCreateOrConnectWithoutConditionValueInput } from './encounter-condition-value-map-create-or-connect-without-condition-value.input';
import { EncounterConditionValueMapCreateManyConditionValueInputEnvelope } from './encounter-condition-value-map-create-many-condition-value-input-envelope.input';
import { Prisma } from '@prisma/client';
import { EncounterConditionValueMapWhereUniqueInput } from './encounter-condition-value-map-where-unique.input';

@InputType()
export class EncounterConditionValueMapUncheckedCreateNestedManyWithoutConditionValueInput {

    @Field(() => [EncounterConditionValueMapCreateWithoutConditionValueInput], {nullable:true})
    @Type(() => EncounterConditionValueMapCreateWithoutConditionValueInput)
    create?: Array<EncounterConditionValueMapCreateWithoutConditionValueInput>;

    @Field(() => [EncounterConditionValueMapCreateOrConnectWithoutConditionValueInput], {nullable:true})
    @Type(() => EncounterConditionValueMapCreateOrConnectWithoutConditionValueInput)
    connectOrCreate?: Array<EncounterConditionValueMapCreateOrConnectWithoutConditionValueInput>;

    @Field(() => EncounterConditionValueMapCreateManyConditionValueInputEnvelope, {nullable:true})
    @Type(() => EncounterConditionValueMapCreateManyConditionValueInputEnvelope)
    createMany?: EncounterConditionValueMapCreateManyConditionValueInputEnvelope;

    @Field(() => [EncounterConditionValueMapWhereUniqueInput], {nullable:true})
    @Type(() => EncounterConditionValueMapWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<EncounterConditionValueMapWhereUniqueInput, 'encounter_id'>>;
}
