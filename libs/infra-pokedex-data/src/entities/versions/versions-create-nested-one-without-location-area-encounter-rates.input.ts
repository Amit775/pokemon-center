import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { VersionsCreateWithoutLocationAreaEncounterRatesInput } from './versions-create-without-location-area-encounter-rates.input';
import { Type } from 'class-transformer';
import { VersionsCreateOrConnectWithoutLocationAreaEncounterRatesInput } from './versions-create-or-connect-without-location-area-encounter-rates.input';
import { Prisma } from '@pokemon-center/prisma';
import { VersionsWhereUniqueInput } from './versions-where-unique.input';

@InputType()
export class VersionsCreateNestedOneWithoutLocationAreaEncounterRatesInput {

    @Field(() => VersionsCreateWithoutLocationAreaEncounterRatesInput, {nullable:true})
    @Type(() => VersionsCreateWithoutLocationAreaEncounterRatesInput)
    create?: Identity<VersionsCreateWithoutLocationAreaEncounterRatesInput>;

    @Field(() => VersionsCreateOrConnectWithoutLocationAreaEncounterRatesInput, {nullable:true})
    @Type(() => VersionsCreateOrConnectWithoutLocationAreaEncounterRatesInput)
    connectOrCreate?: Identity<VersionsCreateOrConnectWithoutLocationAreaEncounterRatesInput>;

    @Field(() => VersionsWhereUniqueInput, {nullable:true})
    @Type(() => VersionsWhereUniqueInput)
    connect?: Prisma.AtLeast<VersionsWhereUniqueInput, 'id'>;
}
