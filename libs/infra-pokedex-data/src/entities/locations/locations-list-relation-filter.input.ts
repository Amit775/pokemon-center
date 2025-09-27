import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LocationsWhereInput } from './locations-where.input';

@InputType()
export class LocationsListRelationFilter {

    @Field(() => LocationsWhereInput, {nullable:true})
    every?: LocationsWhereInput;

    @Field(() => LocationsWhereInput, {nullable:true})
    some?: LocationsWhereInput;

    @Field(() => LocationsWhereInput, {nullable:true})
    none?: LocationsWhereInput;
}
