import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LocationAreaEncounterRatesCreateManyEncounterMethodInput } from './location-area-encounter-rates-create-many-encounter-method.input';
import { Type } from 'class-transformer';

@InputType()
export class LocationAreaEncounterRatesCreateManyEncounterMethodInputEnvelope {

    @Field(() => [LocationAreaEncounterRatesCreateManyEncounterMethodInput], {nullable:false})
    @Type(() => LocationAreaEncounterRatesCreateManyEncounterMethodInput)
    data!: Array<LocationAreaEncounterRatesCreateManyEncounterMethodInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
