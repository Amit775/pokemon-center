import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { EncounterMethodsWhereUniqueInput } from './encounter-methods-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { EncounterMethodsCreateInput } from './encounter-methods-create.input';
import { EncounterMethodsUpdateInput } from './encounter-methods-update.input';

@ArgsType()
export class UpsertOneEncounterMethodsArgs {

    @Field(() => EncounterMethodsWhereUniqueInput, {nullable:false})
    @Type(() => EncounterMethodsWhereUniqueInput)
    where!: Prisma.AtLeast<EncounterMethodsWhereUniqueInput, 'id'>;

    @Field(() => EncounterMethodsCreateInput, {nullable:false})
    @Type(() => EncounterMethodsCreateInput)
    create!: Identity<EncounterMethodsCreateInput>;

    @Field(() => EncounterMethodsUpdateInput, {nullable:false})
    @Type(() => EncounterMethodsUpdateInput)
    update!: Identity<EncounterMethodsUpdateInput>;
}
