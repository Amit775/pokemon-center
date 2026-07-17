import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EncounterConditionsWhereUniqueInput } from './encounter-conditions-where-unique.input';
import { Type } from 'class-transformer';
import { EncounterConditionsCreateWithoutValuesInput } from './encounter-conditions-create-without-values.input';

@InputType()
export class EncounterConditionsCreateOrConnectWithoutValuesInput {

    @Field(() => EncounterConditionsWhereUniqueInput, {nullable:false})
    @Type(() => EncounterConditionsWhereUniqueInput)
    where!: Prisma.AtLeast<EncounterConditionsWhereUniqueInput, 'id'>;

    @Field(() => EncounterConditionsCreateWithoutValuesInput, {nullable:false})
    @Type(() => EncounterConditionsCreateWithoutValuesInput)
    create!: EncounterConditionsCreateWithoutValuesInput;
}
