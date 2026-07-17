import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class LocationAreaEncounterRatesCreateManyEncounterMethodInput {

    @Field(() => Int, {nullable:false})
    location_area_id!: number;

    @Field(() => Int, {nullable:false})
    version_id!: number;

    @Field(() => Int, {nullable:false})
    rate!: number;
}
