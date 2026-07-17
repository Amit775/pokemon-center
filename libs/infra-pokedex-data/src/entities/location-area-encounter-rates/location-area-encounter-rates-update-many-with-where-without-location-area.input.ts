import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LocationAreaEncounterRatesScalarWhereInput } from './location-area-encounter-rates-scalar-where.input';
import { Type } from 'class-transformer';
import { LocationAreaEncounterRatesUpdateManyMutationInput } from './location-area-encounter-rates-update-many-mutation.input';

@InputType()
export class LocationAreaEncounterRatesUpdateManyWithWhereWithoutLocationAreaInput {

    @Field(() => LocationAreaEncounterRatesScalarWhereInput, {nullable:false})
    @Type(() => LocationAreaEncounterRatesScalarWhereInput)
    where!: LocationAreaEncounterRatesScalarWhereInput;

    @Field(() => LocationAreaEncounterRatesUpdateManyMutationInput, {nullable:false})
    @Type(() => LocationAreaEncounterRatesUpdateManyMutationInput)
    data!: LocationAreaEncounterRatesUpdateManyMutationInput;
}
