import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { EncounterSlots } from '../encounter-slots/encounter-slots.model';
import { LocationAreaEncounterRates } from '../location-area-encounter-rates/location-area-encounter-rates.model';
import { EncounterMethodsCount } from './encounter-methods-count.output';
import type { Identity } from 'identity-type';

/**
 * @@TypeGraphQL.type(name: "EncounterMethod")
 */
@ObjectType({description:'@@TypeGraphQL.type(name: "EncounterMethod")'})
export class EncounterMethods {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => Int, {nullable:false})
    order!: number;

    @Field(() => [EncounterSlots], {nullable:false})
    slots?: Array<EncounterSlots>;

    @Field(() => [LocationAreaEncounterRates], {nullable:false})
    encounterRates?: Array<LocationAreaEncounterRates>;

    @Field(() => EncounterMethodsCount, {nullable:false})
    _count?: Identity<EncounterMethodsCount>;
}
