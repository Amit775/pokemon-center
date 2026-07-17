import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EncounterConditionValuesCreateWithoutConditionValueMapInput } from './encounter-condition-values-create-without-condition-value-map.input';
import { Type } from 'class-transformer';
import { EncounterConditionValuesCreateOrConnectWithoutConditionValueMapInput } from './encounter-condition-values-create-or-connect-without-condition-value-map.input';
import { EncounterConditionValuesUpsertWithoutConditionValueMapInput } from './encounter-condition-values-upsert-without-condition-value-map.input';
import { Prisma } from '@prisma/client';
import { EncounterConditionValuesWhereUniqueInput } from './encounter-condition-values-where-unique.input';
import { EncounterConditionValuesUpdateToOneWithWhereWithoutConditionValueMapInput } from './encounter-condition-values-update-to-one-with-where-without-condition-value-map.input';

@InputType()
export class EncounterConditionValuesUpdateOneRequiredWithoutConditionValueMapNestedInput {

    @Field(() => EncounterConditionValuesCreateWithoutConditionValueMapInput, {nullable:true})
    @Type(() => EncounterConditionValuesCreateWithoutConditionValueMapInput)
    create?: EncounterConditionValuesCreateWithoutConditionValueMapInput;

    @Field(() => EncounterConditionValuesCreateOrConnectWithoutConditionValueMapInput, {nullable:true})
    @Type(() => EncounterConditionValuesCreateOrConnectWithoutConditionValueMapInput)
    connectOrCreate?: EncounterConditionValuesCreateOrConnectWithoutConditionValueMapInput;

    @Field(() => EncounterConditionValuesUpsertWithoutConditionValueMapInput, {nullable:true})
    @Type(() => EncounterConditionValuesUpsertWithoutConditionValueMapInput)
    upsert?: EncounterConditionValuesUpsertWithoutConditionValueMapInput;

    @Field(() => EncounterConditionValuesWhereUniqueInput, {nullable:true})
    @Type(() => EncounterConditionValuesWhereUniqueInput)
    connect?: Prisma.AtLeast<EncounterConditionValuesWhereUniqueInput, 'id'>;

    @Field(() => EncounterConditionValuesUpdateToOneWithWhereWithoutConditionValueMapInput, {nullable:true})
    @Type(() => EncounterConditionValuesUpdateToOneWithWhereWithoutConditionValueMapInput)
    update?: EncounterConditionValuesUpdateToOneWithWhereWithoutConditionValueMapInput;
}
