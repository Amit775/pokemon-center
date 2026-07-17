import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EncounterConditionsCreateWithoutValuesInput } from './encounter-conditions-create-without-values.input';
import { Type } from 'class-transformer';
import { EncounterConditionsCreateOrConnectWithoutValuesInput } from './encounter-conditions-create-or-connect-without-values.input';
import { Prisma } from '@prisma/client';
import { EncounterConditionsWhereUniqueInput } from './encounter-conditions-where-unique.input';

@InputType()
export class EncounterConditionsCreateNestedOneWithoutValuesInput {

    @Field(() => EncounterConditionsCreateWithoutValuesInput, {nullable:true})
    @Type(() => EncounterConditionsCreateWithoutValuesInput)
    create?: EncounterConditionsCreateWithoutValuesInput;

    @Field(() => EncounterConditionsCreateOrConnectWithoutValuesInput, {nullable:true})
    @Type(() => EncounterConditionsCreateOrConnectWithoutValuesInput)
    connectOrCreate?: EncounterConditionsCreateOrConnectWithoutValuesInput;

    @Field(() => EncounterConditionsWhereUniqueInput, {nullable:true})
    @Type(() => EncounterConditionsWhereUniqueInput)
    connect?: Prisma.AtLeast<EncounterConditionsWhereUniqueInput, 'id'>;
}
