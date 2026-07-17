import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EncounterConditionValuesCreateWithoutConditionInput } from './encounter-condition-values-create-without-condition.input';
import { Type } from 'class-transformer';
import { EncounterConditionValuesCreateOrConnectWithoutConditionInput } from './encounter-condition-values-create-or-connect-without-condition.input';
import { EncounterConditionValuesCreateManyConditionInputEnvelope } from './encounter-condition-values-create-many-condition-input-envelope.input';
import { Prisma } from '@prisma/client';
import { EncounterConditionValuesWhereUniqueInput } from './encounter-condition-values-where-unique.input';

@InputType()
export class EncounterConditionValuesCreateNestedManyWithoutConditionInput {

    @Field(() => [EncounterConditionValuesCreateWithoutConditionInput], {nullable:true})
    @Type(() => EncounterConditionValuesCreateWithoutConditionInput)
    create?: Array<EncounterConditionValuesCreateWithoutConditionInput>;

    @Field(() => [EncounterConditionValuesCreateOrConnectWithoutConditionInput], {nullable:true})
    @Type(() => EncounterConditionValuesCreateOrConnectWithoutConditionInput)
    connectOrCreate?: Array<EncounterConditionValuesCreateOrConnectWithoutConditionInput>;

    @Field(() => EncounterConditionValuesCreateManyConditionInputEnvelope, {nullable:true})
    @Type(() => EncounterConditionValuesCreateManyConditionInputEnvelope)
    createMany?: EncounterConditionValuesCreateManyConditionInputEnvelope;

    @Field(() => [EncounterConditionValuesWhereUniqueInput], {nullable:true})
    @Type(() => EncounterConditionValuesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<EncounterConditionValuesWhereUniqueInput, 'id'>>;
}
