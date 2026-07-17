import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { LocationAreasWhereInput } from './location-areas-where.input';
import { Type } from 'class-transformer';
import { LocationAreasUpdateWithoutEncountersInput } from './location-areas-update-without-encounters.input';

@InputType()
export class LocationAreasUpdateToOneWithWhereWithoutEncountersInput {

    @Field(() => LocationAreasWhereInput, {nullable:true})
    @Type(() => LocationAreasWhereInput)
    where?: Identity<LocationAreasWhereInput>;

    @Field(() => LocationAreasUpdateWithoutEncountersInput, {nullable:false})
    @Type(() => LocationAreasUpdateWithoutEncountersInput)
    data!: Identity<LocationAreasUpdateWithoutEncountersInput>;
}
