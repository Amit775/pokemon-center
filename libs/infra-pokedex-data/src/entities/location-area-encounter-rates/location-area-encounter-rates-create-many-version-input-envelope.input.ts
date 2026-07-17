import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LocationAreaEncounterRatesCreateManyVersionInput } from './location-area-encounter-rates-create-many-version.input';
import { Type } from 'class-transformer';

@InputType()
export class LocationAreaEncounterRatesCreateManyVersionInputEnvelope {

    @Field(() => [LocationAreaEncounterRatesCreateManyVersionInput], {nullable:false})
    @Type(() => LocationAreaEncounterRatesCreateManyVersionInput)
    data!: Array<LocationAreaEncounterRatesCreateManyVersionInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
