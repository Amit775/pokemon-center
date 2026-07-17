import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VersionsCreateWithoutLocationAreaEncounterRatesInput } from './versions-create-without-location-area-encounter-rates.input';
import { Type } from 'class-transformer';
import { VersionsCreateOrConnectWithoutLocationAreaEncounterRatesInput } from './versions-create-or-connect-without-location-area-encounter-rates.input';
import { Prisma } from '@prisma/client';
import { VersionsWhereUniqueInput } from './versions-where-unique.input';

@InputType()
export class VersionsCreateNestedOneWithoutLocationAreaEncounterRatesInput {

    @Field(() => VersionsCreateWithoutLocationAreaEncounterRatesInput, {nullable:true})
    @Type(() => VersionsCreateWithoutLocationAreaEncounterRatesInput)
    create?: VersionsCreateWithoutLocationAreaEncounterRatesInput;

    @Field(() => VersionsCreateOrConnectWithoutLocationAreaEncounterRatesInput, {nullable:true})
    @Type(() => VersionsCreateOrConnectWithoutLocationAreaEncounterRatesInput)
    connectOrCreate?: VersionsCreateOrConnectWithoutLocationAreaEncounterRatesInput;

    @Field(() => VersionsWhereUniqueInput, {nullable:true})
    @Type(() => VersionsWhereUniqueInput)
    connect?: Prisma.AtLeast<VersionsWhereUniqueInput, 'id'>;
}
