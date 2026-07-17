import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VersionsCreateWithoutLocationAreaEncounterRatesInput } from './versions-create-without-location-area-encounter-rates.input';
import { Type } from 'class-transformer';
import { VersionsCreateOrConnectWithoutLocationAreaEncounterRatesInput } from './versions-create-or-connect-without-location-area-encounter-rates.input';
import { VersionsUpsertWithoutLocationAreaEncounterRatesInput } from './versions-upsert-without-location-area-encounter-rates.input';
import { Prisma } from '@prisma/client';
import { VersionsWhereUniqueInput } from './versions-where-unique.input';
import { VersionsUpdateToOneWithWhereWithoutLocationAreaEncounterRatesInput } from './versions-update-to-one-with-where-without-location-area-encounter-rates.input';

@InputType()
export class VersionsUpdateOneRequiredWithoutLocationAreaEncounterRatesNestedInput {

    @Field(() => VersionsCreateWithoutLocationAreaEncounterRatesInput, {nullable:true})
    @Type(() => VersionsCreateWithoutLocationAreaEncounterRatesInput)
    create?: VersionsCreateWithoutLocationAreaEncounterRatesInput;

    @Field(() => VersionsCreateOrConnectWithoutLocationAreaEncounterRatesInput, {nullable:true})
    @Type(() => VersionsCreateOrConnectWithoutLocationAreaEncounterRatesInput)
    connectOrCreate?: VersionsCreateOrConnectWithoutLocationAreaEncounterRatesInput;

    @Field(() => VersionsUpsertWithoutLocationAreaEncounterRatesInput, {nullable:true})
    @Type(() => VersionsUpsertWithoutLocationAreaEncounterRatesInput)
    upsert?: VersionsUpsertWithoutLocationAreaEncounterRatesInput;

    @Field(() => VersionsWhereUniqueInput, {nullable:true})
    @Type(() => VersionsWhereUniqueInput)
    connect?: Prisma.AtLeast<VersionsWhereUniqueInput, 'id'>;

    @Field(() => VersionsUpdateToOneWithWhereWithoutLocationAreaEncounterRatesInput, {nullable:true})
    @Type(() => VersionsUpdateToOneWithWhereWithoutLocationAreaEncounterRatesInput)
    update?: VersionsUpdateToOneWithWhereWithoutLocationAreaEncounterRatesInput;
}
