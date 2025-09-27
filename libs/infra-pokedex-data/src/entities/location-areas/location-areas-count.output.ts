import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class LocationAreasCount {

    @Field(() => Int, {nullable:false})
    encounters?: number;

    @Field(() => Int, {nullable:false})
    encounterRates?: number;
}
