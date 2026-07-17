import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EncounterConditionValueMapCreateWithoutConditionValueInput } from './encounter-condition-value-map-create-without-condition-value.input';
import { Type } from 'class-transformer';
import { EncounterConditionValueMapCreateOrConnectWithoutConditionValueInput } from './encounter-condition-value-map-create-or-connect-without-condition-value.input';
import { EncounterConditionValueMapUpsertWithWhereUniqueWithoutConditionValueInput } from './encounter-condition-value-map-upsert-with-where-unique-without-condition-value.input';
import type { Identity } from 'identity-type';
import { EncounterConditionValueMapCreateManyConditionValueInputEnvelope } from './encounter-condition-value-map-create-many-condition-value-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { EncounterConditionValueMapWhereUniqueInput } from './encounter-condition-value-map-where-unique.input';
import { EncounterConditionValueMapUpdateWithWhereUniqueWithoutConditionValueInput } from './encounter-condition-value-map-update-with-where-unique-without-condition-value.input';
import { EncounterConditionValueMapUpdateManyWithWhereWithoutConditionValueInput } from './encounter-condition-value-map-update-many-with-where-without-condition-value.input';
import { EncounterConditionValueMapScalarWhereInput } from './encounter-condition-value-map-scalar-where.input';

@InputType()
export class EncounterConditionValueMapUpdateManyWithoutConditionValueNestedInput {

    @Field(() => [EncounterConditionValueMapCreateWithoutConditionValueInput], {nullable:true})
    @Type(() => EncounterConditionValueMapCreateWithoutConditionValueInput)
    create?: Array<EncounterConditionValueMapCreateWithoutConditionValueInput>;

    @Field(() => [EncounterConditionValueMapCreateOrConnectWithoutConditionValueInput], {nullable:true})
    @Type(() => EncounterConditionValueMapCreateOrConnectWithoutConditionValueInput)
    connectOrCreate?: Array<EncounterConditionValueMapCreateOrConnectWithoutConditionValueInput>;

    @Field(() => [EncounterConditionValueMapUpsertWithWhereUniqueWithoutConditionValueInput], {nullable:true})
    @Type(() => EncounterConditionValueMapUpsertWithWhereUniqueWithoutConditionValueInput)
    upsert?: Array<EncounterConditionValueMapUpsertWithWhereUniqueWithoutConditionValueInput>;

    @Field(() => EncounterConditionValueMapCreateManyConditionValueInputEnvelope, {nullable:true})
    @Type(() => EncounterConditionValueMapCreateManyConditionValueInputEnvelope)
    createMany?: Identity<EncounterConditionValueMapCreateManyConditionValueInputEnvelope>;

    @Field(() => [EncounterConditionValueMapWhereUniqueInput], {nullable:true})
    @Type(() => EncounterConditionValueMapWhereUniqueInput)
    set?: Array<Prisma.AtLeast<EncounterConditionValueMapWhereUniqueInput, 'encounter_id'>>;

    @Field(() => [EncounterConditionValueMapWhereUniqueInput], {nullable:true})
    @Type(() => EncounterConditionValueMapWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<EncounterConditionValueMapWhereUniqueInput, 'encounter_id'>>;

    @Field(() => [EncounterConditionValueMapWhereUniqueInput], {nullable:true})
    @Type(() => EncounterConditionValueMapWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<EncounterConditionValueMapWhereUniqueInput, 'encounter_id'>>;

    @Field(() => [EncounterConditionValueMapWhereUniqueInput], {nullable:true})
    @Type(() => EncounterConditionValueMapWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<EncounterConditionValueMapWhereUniqueInput, 'encounter_id'>>;

    @Field(() => [EncounterConditionValueMapUpdateWithWhereUniqueWithoutConditionValueInput], {nullable:true})
    @Type(() => EncounterConditionValueMapUpdateWithWhereUniqueWithoutConditionValueInput)
    update?: Array<EncounterConditionValueMapUpdateWithWhereUniqueWithoutConditionValueInput>;

    @Field(() => [EncounterConditionValueMapUpdateManyWithWhereWithoutConditionValueInput], {nullable:true})
    @Type(() => EncounterConditionValueMapUpdateManyWithWhereWithoutConditionValueInput)
    updateMany?: Array<EncounterConditionValueMapUpdateManyWithWhereWithoutConditionValueInput>;

    @Field(() => [EncounterConditionValueMapScalarWhereInput], {nullable:true})
    @Type(() => EncounterConditionValueMapScalarWhereInput)
    deleteMany?: Array<EncounterConditionValueMapScalarWhereInput>;
}
