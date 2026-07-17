import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { LocationAreaEncounterRatesUncheckedCreateNestedManyWithoutEncounterMethodInput } from '../location-area-encounter-rates/location-area-encounter-rates-unchecked-create-nested-many-without-encounter-method.input';

@InputType()
export class EncounterMethodsUncheckedCreateWithoutSlotsInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => Int, {nullable:false})
    order!: number;

    @Field(() => LocationAreaEncounterRatesUncheckedCreateNestedManyWithoutEncounterMethodInput, {nullable:true})
    encounterRates?: LocationAreaEncounterRatesUncheckedCreateNestedManyWithoutEncounterMethodInput;
}
