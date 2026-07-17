import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LocationAreasWhereInput } from './location-areas-where.input';
import { Type } from 'class-transformer';
import { LocationAreasUpdateWithoutEncountersInput } from './location-areas-update-without-encounters.input';

@InputType()
export class LocationAreasUpdateToOneWithWhereWithoutEncountersInput {

    @Field(() => LocationAreasWhereInput, {nullable:true})
    @Type(() => LocationAreasWhereInput)
    where?: LocationAreasWhereInput;

    @Field(() => LocationAreasUpdateWithoutEncountersInput, {nullable:false})
    @Type(() => LocationAreasUpdateWithoutEncountersInput)
    data!: LocationAreasUpdateWithoutEncountersInput;
}
