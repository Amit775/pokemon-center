import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { EncounterMethodsCreateWithoutEncounterRatesInput } from './encounter-methods-create-without-encounter-rates.input';
import { Type } from 'class-transformer';
import { EncounterMethodsCreateOrConnectWithoutEncounterRatesInput } from './encounter-methods-create-or-connect-without-encounter-rates.input';
import { EncounterMethodsUpsertWithoutEncounterRatesInput } from './encounter-methods-upsert-without-encounter-rates.input';
import { Prisma } from '@pokemon-center/prisma';
import { EncounterMethodsWhereUniqueInput } from './encounter-methods-where-unique.input';
import { EncounterMethodsUpdateToOneWithWhereWithoutEncounterRatesInput } from './encounter-methods-update-to-one-with-where-without-encounter-rates.input';

@InputType()
export class EncounterMethodsUpdateOneRequiredWithoutEncounterRatesNestedInput {

    @Field(() => EncounterMethodsCreateWithoutEncounterRatesInput, {nullable:true})
    @Type(() => EncounterMethodsCreateWithoutEncounterRatesInput)
    create?: Identity<EncounterMethodsCreateWithoutEncounterRatesInput>;

    @Field(() => EncounterMethodsCreateOrConnectWithoutEncounterRatesInput, {nullable:true})
    @Type(() => EncounterMethodsCreateOrConnectWithoutEncounterRatesInput)
    connectOrCreate?: Identity<EncounterMethodsCreateOrConnectWithoutEncounterRatesInput>;

    @Field(() => EncounterMethodsUpsertWithoutEncounterRatesInput, {nullable:true})
    @Type(() => EncounterMethodsUpsertWithoutEncounterRatesInput)
    upsert?: Identity<EncounterMethodsUpsertWithoutEncounterRatesInput>;

    @Field(() => EncounterMethodsWhereUniqueInput, {nullable:true})
    @Type(() => EncounterMethodsWhereUniqueInput)
    connect?: Prisma.AtLeast<EncounterMethodsWhereUniqueInput, 'id'>;

    @Field(() => EncounterMethodsUpdateToOneWithWhereWithoutEncounterRatesInput, {nullable:true})
    @Type(() => EncounterMethodsUpdateToOneWithWhereWithoutEncounterRatesInput)
    update?: Identity<EncounterMethodsUpdateToOneWithWhereWithoutEncounterRatesInput>;
}
