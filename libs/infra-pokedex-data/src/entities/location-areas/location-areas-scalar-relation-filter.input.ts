import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { LocationAreasWhereInput } from './location-areas-where.input';

@InputType()
export class LocationAreasScalarRelationFilter {

    @Field(() => LocationAreasWhereInput, {nullable:true})
    is?: Identity<LocationAreasWhereInput>;

    @Field(() => LocationAreasWhereInput, {nullable:true})
    isNot?: Identity<LocationAreasWhereInput>;
}
