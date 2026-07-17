import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EncounterMethodsUpdateInput } from './encounter-methods-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { EncounterMethodsWhereUniqueInput } from './encounter-methods-where-unique.input';

@ArgsType()
export class UpdateOneEncounterMethodsArgs {

    @Field(() => EncounterMethodsUpdateInput, {nullable:false})
    @Type(() => EncounterMethodsUpdateInput)
    data!: EncounterMethodsUpdateInput;

    @Field(() => EncounterMethodsWhereUniqueInput, {nullable:false})
    @Type(() => EncounterMethodsWhereUniqueInput)
    where!: Prisma.AtLeast<EncounterMethodsWhereUniqueInput, 'id'>;
}
