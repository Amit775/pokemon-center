import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EncounterConditionValuesCreateWithoutConditionInput } from './encounter-condition-values-create-without-condition.input';
import { Type } from 'class-transformer';
import { EncounterConditionValuesCreateOrConnectWithoutConditionInput } from './encounter-condition-values-create-or-connect-without-condition.input';
import { EncounterConditionValuesUpsertWithWhereUniqueWithoutConditionInput } from './encounter-condition-values-upsert-with-where-unique-without-condition.input';
import { EncounterConditionValuesCreateManyConditionInputEnvelope } from './encounter-condition-values-create-many-condition-input-envelope.input';
import { Prisma } from '@prisma/client';
import { EncounterConditionValuesWhereUniqueInput } from './encounter-condition-values-where-unique.input';
import { EncounterConditionValuesUpdateWithWhereUniqueWithoutConditionInput } from './encounter-condition-values-update-with-where-unique-without-condition.input';
import { EncounterConditionValuesUpdateManyWithWhereWithoutConditionInput } from './encounter-condition-values-update-many-with-where-without-condition.input';
import { EncounterConditionValuesScalarWhereInput } from './encounter-condition-values-scalar-where.input';

@InputType()
export class EncounterConditionValuesUpdateManyWithoutConditionNestedInput {

    @Field(() => [EncounterConditionValuesCreateWithoutConditionInput], {nullable:true})
    @Type(() => EncounterConditionValuesCreateWithoutConditionInput)
    create?: Array<EncounterConditionValuesCreateWithoutConditionInput>;

    @Field(() => [EncounterConditionValuesCreateOrConnectWithoutConditionInput], {nullable:true})
    @Type(() => EncounterConditionValuesCreateOrConnectWithoutConditionInput)
    connectOrCreate?: Array<EncounterConditionValuesCreateOrConnectWithoutConditionInput>;

    @Field(() => [EncounterConditionValuesUpsertWithWhereUniqueWithoutConditionInput], {nullable:true})
    @Type(() => EncounterConditionValuesUpsertWithWhereUniqueWithoutConditionInput)
    upsert?: Array<EncounterConditionValuesUpsertWithWhereUniqueWithoutConditionInput>;

    @Field(() => EncounterConditionValuesCreateManyConditionInputEnvelope, {nullable:true})
    @Type(() => EncounterConditionValuesCreateManyConditionInputEnvelope)
    createMany?: EncounterConditionValuesCreateManyConditionInputEnvelope;

    @Field(() => [EncounterConditionValuesWhereUniqueInput], {nullable:true})
    @Type(() => EncounterConditionValuesWhereUniqueInput)
    set?: Array<Prisma.AtLeast<EncounterConditionValuesWhereUniqueInput, 'id'>>;

    @Field(() => [EncounterConditionValuesWhereUniqueInput], {nullable:true})
    @Type(() => EncounterConditionValuesWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<EncounterConditionValuesWhereUniqueInput, 'id'>>;

    @Field(() => [EncounterConditionValuesWhereUniqueInput], {nullable:true})
    @Type(() => EncounterConditionValuesWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<EncounterConditionValuesWhereUniqueInput, 'id'>>;

    @Field(() => [EncounterConditionValuesWhereUniqueInput], {nullable:true})
    @Type(() => EncounterConditionValuesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<EncounterConditionValuesWhereUniqueInput, 'id'>>;

    @Field(() => [EncounterConditionValuesUpdateWithWhereUniqueWithoutConditionInput], {nullable:true})
    @Type(() => EncounterConditionValuesUpdateWithWhereUniqueWithoutConditionInput)
    update?: Array<EncounterConditionValuesUpdateWithWhereUniqueWithoutConditionInput>;

    @Field(() => [EncounterConditionValuesUpdateManyWithWhereWithoutConditionInput], {nullable:true})
    @Type(() => EncounterConditionValuesUpdateManyWithWhereWithoutConditionInput)
    updateMany?: Array<EncounterConditionValuesUpdateManyWithWhereWithoutConditionInput>;

    @Field(() => [EncounterConditionValuesScalarWhereInput], {nullable:true})
    @Type(() => EncounterConditionValuesScalarWhereInput)
    deleteMany?: Array<EncounterConditionValuesScalarWhereInput>;
}
