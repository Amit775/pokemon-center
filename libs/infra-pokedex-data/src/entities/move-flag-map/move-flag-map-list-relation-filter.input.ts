import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MoveFlagMapWhereInput } from './move-flag-map-where.input';

@InputType()
export class MoveFlagMapListRelationFilter {

    @Field(() => MoveFlagMapWhereInput, {nullable:true})
    every?: MoveFlagMapWhereInput;

    @Field(() => MoveFlagMapWhereInput, {nullable:true})
    some?: MoveFlagMapWhereInput;

    @Field(() => MoveFlagMapWhereInput, {nullable:true})
    none?: MoveFlagMapWhereInput;
}
