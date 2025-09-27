import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EncounterConditionsWhereUniqueInput } from './encounter-conditions-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueEncounterConditionsArgs {

    @Field(() => EncounterConditionsWhereUniqueInput, {nullable:false})
    @Type(() => EncounterConditionsWhereUniqueInput)
    where!: Prisma.AtLeast<EncounterConditionsWhereUniqueInput, 'id'>;
}
