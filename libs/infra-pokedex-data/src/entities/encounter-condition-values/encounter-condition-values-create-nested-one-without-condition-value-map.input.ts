import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { EncounterConditionValuesCreateWithoutConditionValueMapInput } from './encounter-condition-values-create-without-condition-value-map.input';
import { Type } from 'class-transformer';
import { EncounterConditionValuesCreateOrConnectWithoutConditionValueMapInput } from './encounter-condition-values-create-or-connect-without-condition-value-map.input';
import { Prisma } from '@pokemon-center/prisma';
import { EncounterConditionValuesWhereUniqueInput } from './encounter-condition-values-where-unique.input';

@InputType()
export class EncounterConditionValuesCreateNestedOneWithoutConditionValueMapInput {

    @Field(() => EncounterConditionValuesCreateWithoutConditionValueMapInput, {nullable:true})
    @Type(() => EncounterConditionValuesCreateWithoutConditionValueMapInput)
    create?: Identity<EncounterConditionValuesCreateWithoutConditionValueMapInput>;

    @Field(() => EncounterConditionValuesCreateOrConnectWithoutConditionValueMapInput, {nullable:true})
    @Type(() => EncounterConditionValuesCreateOrConnectWithoutConditionValueMapInput)
    connectOrCreate?: Identity<EncounterConditionValuesCreateOrConnectWithoutConditionValueMapInput>;

    @Field(() => EncounterConditionValuesWhereUniqueInput, {nullable:true})
    @Type(() => EncounterConditionValuesWhereUniqueInput)
    connect?: Prisma.AtLeast<EncounterConditionValuesWhereUniqueInput, 'id'>;
}
