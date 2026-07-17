import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { LocationAreaEncounterRatesCreateInput } from './location-area-encounter-rates-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneLocationAreaEncounterRatesArgs {

    @Field(() => LocationAreaEncounterRatesCreateInput, {nullable:false})
    @Type(() => LocationAreaEncounterRatesCreateInput)
    data!: Identity<LocationAreaEncounterRatesCreateInput>;
}
