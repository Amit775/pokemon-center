import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EncounterConditionsCreateWithoutValuesInput } from './encounter-conditions-create-without-values.input';
import { Type } from 'class-transformer';
import { EncounterConditionsCreateOrConnectWithoutValuesInput } from './encounter-conditions-create-or-connect-without-values.input';
import { EncounterConditionsUpsertWithoutValuesInput } from './encounter-conditions-upsert-without-values.input';
import { Prisma } from '@prisma/client';
import { EncounterConditionsWhereUniqueInput } from './encounter-conditions-where-unique.input';
import { EncounterConditionsUpdateToOneWithWhereWithoutValuesInput } from './encounter-conditions-update-to-one-with-where-without-values.input';

@InputType()
export class EncounterConditionsUpdateOneRequiredWithoutValuesNestedInput {

    @Field(() => EncounterConditionsCreateWithoutValuesInput, {nullable:true})
    @Type(() => EncounterConditionsCreateWithoutValuesInput)
    create?: EncounterConditionsCreateWithoutValuesInput;

    @Field(() => EncounterConditionsCreateOrConnectWithoutValuesInput, {nullable:true})
    @Type(() => EncounterConditionsCreateOrConnectWithoutValuesInput)
    connectOrCreate?: EncounterConditionsCreateOrConnectWithoutValuesInput;

    @Field(() => EncounterConditionsUpsertWithoutValuesInput, {nullable:true})
    @Type(() => EncounterConditionsUpsertWithoutValuesInput)
    upsert?: EncounterConditionsUpsertWithoutValuesInput;

    @Field(() => EncounterConditionsWhereUniqueInput, {nullable:true})
    @Type(() => EncounterConditionsWhereUniqueInput)
    connect?: Prisma.AtLeast<EncounterConditionsWhereUniqueInput, 'id'>;

    @Field(() => EncounterConditionsUpdateToOneWithWhereWithoutValuesInput, {nullable:true})
    @Type(() => EncounterConditionsUpdateToOneWithWhereWithoutValuesInput)
    update?: EncounterConditionsUpdateToOneWithWhereWithoutValuesInput;
}
