import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { LocationGameIndicesWhereInput } from './location-game-indices-where.input';

@InputType()
export class LocationGameIndicesListRelationFilter {

    @Field(() => LocationGameIndicesWhereInput, {nullable:true})
    every?: Identity<LocationGameIndicesWhereInput>;

    @Field(() => LocationGameIndicesWhereInput, {nullable:true})
    some?: Identity<LocationGameIndicesWhereInput>;

    @Field(() => LocationGameIndicesWhereInput, {nullable:true})
    none?: Identity<LocationGameIndicesWhereInput>;
}
