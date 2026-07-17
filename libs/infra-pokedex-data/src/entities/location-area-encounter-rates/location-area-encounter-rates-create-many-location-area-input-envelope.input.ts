import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LocationAreaEncounterRatesCreateManyLocationAreaInput } from './location-area-encounter-rates-create-many-location-area.input';
import { Type } from 'class-transformer';

@InputType()
export class LocationAreaEncounterRatesCreateManyLocationAreaInputEnvelope {

    @Field(() => [LocationAreaEncounterRatesCreateManyLocationAreaInput], {nullable:false})
    @Type(() => LocationAreaEncounterRatesCreateManyLocationAreaInput)
    data!: Array<LocationAreaEncounterRatesCreateManyLocationAreaInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
