import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { LocationsWhereInput } from './locations-where.input';

@InputType()
export class LocationsScalarRelationFilter {

    @Field(() => LocationsWhereInput, {nullable:true})
    is?: Identity<LocationsWhereInput>;

    @Field(() => LocationsWhereInput, {nullable:true})
    isNot?: Identity<LocationsWhereInput>;
}
