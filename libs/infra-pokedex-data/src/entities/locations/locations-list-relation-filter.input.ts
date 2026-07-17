import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { LocationsWhereInput } from './locations-where.input';

@InputType()
export class LocationsListRelationFilter {

    @Field(() => LocationsWhereInput, {nullable:true})
    every?: Identity<LocationsWhereInput>;

    @Field(() => LocationsWhereInput, {nullable:true})
    some?: Identity<LocationsWhereInput>;

    @Field(() => LocationsWhereInput, {nullable:true})
    none?: Identity<LocationsWhereInput>;
}
