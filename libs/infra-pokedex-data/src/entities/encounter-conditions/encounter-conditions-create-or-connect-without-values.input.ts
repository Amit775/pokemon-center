import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { EncounterConditionsWhereUniqueInput } from './encounter-conditions-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { EncounterConditionsCreateWithoutValuesInput } from './encounter-conditions-create-without-values.input';

@InputType()
export class EncounterConditionsCreateOrConnectWithoutValuesInput {

    @Field(() => EncounterConditionsWhereUniqueInput, {nullable:false})
    @Type(() => EncounterConditionsWhereUniqueInput)
    where!: Prisma.AtLeast<EncounterConditionsWhereUniqueInput, 'id'>;

    @Field(() => EncounterConditionsCreateWithoutValuesInput, {nullable:false})
    @Type(() => EncounterConditionsCreateWithoutValuesInput)
    create!: Identity<EncounterConditionsCreateWithoutValuesInput>;
}
