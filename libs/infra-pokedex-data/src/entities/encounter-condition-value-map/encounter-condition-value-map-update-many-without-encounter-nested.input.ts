import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EncounterConditionValueMapCreateWithoutEncounterInput } from './encounter-condition-value-map-create-without-encounter.input';
import { Type } from 'class-transformer';
import { EncounterConditionValueMapCreateOrConnectWithoutEncounterInput } from './encounter-condition-value-map-create-or-connect-without-encounter.input';
import { EncounterConditionValueMapUpsertWithWhereUniqueWithoutEncounterInput } from './encounter-condition-value-map-upsert-with-where-unique-without-encounter.input';
import { EncounterConditionValueMapCreateManyEncounterInputEnvelope } from './encounter-condition-value-map-create-many-encounter-input-envelope.input';
import { Prisma } from '@prisma/client';
import { EncounterConditionValueMapWhereUniqueInput } from './encounter-condition-value-map-where-unique.input';
import { EncounterConditionValueMapUpdateWithWhereUniqueWithoutEncounterInput } from './encounter-condition-value-map-update-with-where-unique-without-encounter.input';
import { EncounterConditionValueMapUpdateManyWithWhereWithoutEncounterInput } from './encounter-condition-value-map-update-many-with-where-without-encounter.input';
import { EncounterConditionValueMapScalarWhereInput } from './encounter-condition-value-map-scalar-where.input';

@InputType()
export class EncounterConditionValueMapUpdateManyWithoutEncounterNestedInput {

    @Field(() => [EncounterConditionValueMapCreateWithoutEncounterInput], {nullable:true})
    @Type(() => EncounterConditionValueMapCreateWithoutEncounterInput)
    create?: Array<EncounterConditionValueMapCreateWithoutEncounterInput>;

    @Field(() => [EncounterConditionValueMapCreateOrConnectWithoutEncounterInput], {nullable:true})
    @Type(() => EncounterConditionValueMapCreateOrConnectWithoutEncounterInput)
    connectOrCreate?: Array<EncounterConditionValueMapCreateOrConnectWithoutEncounterInput>;

    @Field(() => [EncounterConditionValueMapUpsertWithWhereUniqueWithoutEncounterInput], {nullable:true})
    @Type(() => EncounterConditionValueMapUpsertWithWhereUniqueWithoutEncounterInput)
    upsert?: Array<EncounterConditionValueMapUpsertWithWhereUniqueWithoutEncounterInput>;

    @Field(() => EncounterConditionValueMapCreateManyEncounterInputEnvelope, {nullable:true})
    @Type(() => EncounterConditionValueMapCreateManyEncounterInputEnvelope)
    createMany?: EncounterConditionValueMapCreateManyEncounterInputEnvelope;

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

    @Field(() => [EncounterConditionValueMapUpdateWithWhereUniqueWithoutEncounterInput], {nullable:true})
    @Type(() => EncounterConditionValueMapUpdateWithWhereUniqueWithoutEncounterInput)
    update?: Array<EncounterConditionValueMapUpdateWithWhereUniqueWithoutEncounterInput>;

    @Field(() => [EncounterConditionValueMapUpdateManyWithWhereWithoutEncounterInput], {nullable:true})
    @Type(() => EncounterConditionValueMapUpdateManyWithWhereWithoutEncounterInput)
    updateMany?: Array<EncounterConditionValueMapUpdateManyWithWhereWithoutEncounterInput>;

    @Field(() => [EncounterConditionValueMapScalarWhereInput], {nullable:true})
    @Type(() => EncounterConditionValueMapScalarWhereInput)
    deleteMany?: Array<EncounterConditionValueMapScalarWhereInput>;
}
