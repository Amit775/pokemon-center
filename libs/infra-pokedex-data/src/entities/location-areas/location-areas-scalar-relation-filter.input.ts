import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LocationAreasWhereInput } from './location-areas-where.input';

@InputType()
export class LocationAreasScalarRelationFilter {

    @Field(() => LocationAreasWhereInput, {nullable:true})
    is?: LocationAreasWhereInput;

    @Field(() => LocationAreasWhereInput, {nullable:true})
    isNot?: LocationAreasWhereInput;
}
