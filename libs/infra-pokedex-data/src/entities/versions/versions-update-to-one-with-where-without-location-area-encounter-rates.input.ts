import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VersionsWhereInput } from './versions-where.input';
import { Type } from 'class-transformer';
import { VersionsUpdateWithoutLocationAreaEncounterRatesInput } from './versions-update-without-location-area-encounter-rates.input';

@InputType()
export class VersionsUpdateToOneWithWhereWithoutLocationAreaEncounterRatesInput {

    @Field(() => VersionsWhereInput, {nullable:true})
    @Type(() => VersionsWhereInput)
    where?: VersionsWhereInput;

    @Field(() => VersionsUpdateWithoutLocationAreaEncounterRatesInput, {nullable:false})
    @Type(() => VersionsUpdateWithoutLocationAreaEncounterRatesInput)
    data!: VersionsUpdateWithoutLocationAreaEncounterRatesInput;
}
