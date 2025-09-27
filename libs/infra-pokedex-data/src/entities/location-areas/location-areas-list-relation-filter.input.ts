import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LocationAreasWhereInput } from './location-areas-where.input';

@InputType()
export class LocationAreasListRelationFilter {

    @Field(() => LocationAreasWhereInput, {nullable:true})
    every?: LocationAreasWhereInput;

    @Field(() => LocationAreasWhereInput, {nullable:true})
    some?: LocationAreasWhereInput;

    @Field(() => LocationAreasWhereInput, {nullable:true})
    none?: LocationAreasWhereInput;
}
