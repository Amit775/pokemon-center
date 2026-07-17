import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { VersionsWhereUniqueInput } from './versions-where-unique.input';
import { Type } from 'class-transformer';
import { VersionsCreateWithoutLocationAreaEncounterRatesInput } from './versions-create-without-location-area-encounter-rates.input';

@InputType()
export class VersionsCreateOrConnectWithoutLocationAreaEncounterRatesInput {

    @Field(() => VersionsWhereUniqueInput, {nullable:false})
    @Type(() => VersionsWhereUniqueInput)
    where!: Prisma.AtLeast<VersionsWhereUniqueInput, 'id'>;

    @Field(() => VersionsCreateWithoutLocationAreaEncounterRatesInput, {nullable:false})
    @Type(() => VersionsCreateWithoutLocationAreaEncounterRatesInput)
    create!: VersionsCreateWithoutLocationAreaEncounterRatesInput;
}
