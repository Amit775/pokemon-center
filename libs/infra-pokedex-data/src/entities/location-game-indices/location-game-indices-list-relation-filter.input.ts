import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LocationGameIndicesWhereInput } from './location-game-indices-where.input';

@InputType()
export class LocationGameIndicesListRelationFilter {

    @Field(() => LocationGameIndicesWhereInput, {nullable:true})
    every?: LocationGameIndicesWhereInput;

    @Field(() => LocationGameIndicesWhereInput, {nullable:true})
    some?: LocationGameIndicesWhereInput;

    @Field(() => LocationGameIndicesWhereInput, {nullable:true})
    none?: LocationGameIndicesWhereInput;
}
