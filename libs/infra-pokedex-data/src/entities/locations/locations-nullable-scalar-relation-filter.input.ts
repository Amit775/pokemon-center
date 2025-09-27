import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LocationsWhereInput } from './locations-where.input';

@InputType()
export class LocationsNullableScalarRelationFilter {

    @Field(() => LocationsWhereInput, {nullable:true})
    is?: LocationsWhereInput;

    @Field(() => LocationsWhereInput, {nullable:true})
    isNot?: LocationsWhereInput;
}
