import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { LocationAreaEncounterRatesCreateNestedManyWithoutEncounterMethodInput } from '../location-area-encounter-rates/location-area-encounter-rates-create-nested-many-without-encounter-method.input';

@InputType()
export class EncounterMethodsCreateWithoutSlotsInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => Int, {nullable:false})
    order!: number;

    @Field(() => LocationAreaEncounterRatesCreateNestedManyWithoutEncounterMethodInput, {nullable:true})
    encounterRates?: LocationAreaEncounterRatesCreateNestedManyWithoutEncounterMethodInput;
}
