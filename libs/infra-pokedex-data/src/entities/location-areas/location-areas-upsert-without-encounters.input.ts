import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LocationAreasUpdateWithoutEncountersInput } from './location-areas-update-without-encounters.input';
import { Type } from 'class-transformer';
import { LocationAreasCreateWithoutEncountersInput } from './location-areas-create-without-encounters.input';
import { LocationAreasWhereInput } from './location-areas-where.input';

@InputType()
export class LocationAreasUpsertWithoutEncountersInput {

    @Field(() => LocationAreasUpdateWithoutEncountersInput, {nullable:false})
    @Type(() => LocationAreasUpdateWithoutEncountersInput)
    update!: LocationAreasUpdateWithoutEncountersInput;

    @Field(() => LocationAreasCreateWithoutEncountersInput, {nullable:false})
    @Type(() => LocationAreasCreateWithoutEncountersInput)
    create!: LocationAreasCreateWithoutEncountersInput;

    @Field(() => LocationAreasWhereInput, {nullable:true})
    @Type(() => LocationAreasWhereInput)
    where?: LocationAreasWhereInput;
}
