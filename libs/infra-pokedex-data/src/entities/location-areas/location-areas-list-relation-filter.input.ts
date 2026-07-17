import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { LocationAreasWhereInput } from './location-areas-where.input';

@InputType()
export class LocationAreasListRelationFilter {

    @Field(() => LocationAreasWhereInput, {nullable:true})
    every?: Identity<LocationAreasWhereInput>;

    @Field(() => LocationAreasWhereInput, {nullable:true})
    some?: Identity<LocationAreasWhereInput>;

    @Field(() => LocationAreasWhereInput, {nullable:true})
    none?: Identity<LocationAreasWhereInput>;
}
