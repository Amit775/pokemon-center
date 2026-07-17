import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VersionsUpdateWithoutLocationAreaEncounterRatesInput } from './versions-update-without-location-area-encounter-rates.input';
import { Type } from 'class-transformer';
import { VersionsCreateWithoutLocationAreaEncounterRatesInput } from './versions-create-without-location-area-encounter-rates.input';
import { VersionsWhereInput } from './versions-where.input';

@InputType()
export class VersionsUpsertWithoutLocationAreaEncounterRatesInput {

    @Field(() => VersionsUpdateWithoutLocationAreaEncounterRatesInput, {nullable:false})
    @Type(() => VersionsUpdateWithoutLocationAreaEncounterRatesInput)
    update!: VersionsUpdateWithoutLocationAreaEncounterRatesInput;

    @Field(() => VersionsCreateWithoutLocationAreaEncounterRatesInput, {nullable:false})
    @Type(() => VersionsCreateWithoutLocationAreaEncounterRatesInput)
    create!: VersionsCreateWithoutLocationAreaEncounterRatesInput;

    @Field(() => VersionsWhereInput, {nullable:true})
    @Type(() => VersionsWhereInput)
    where?: VersionsWhereInput;
}
