import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MoveFlagMapWhereInput } from './move-flag-map-where.input';

@InputType()
export class MoveFlagMapListRelationFilter {

    @Field(() => MoveFlagMapWhereInput, {nullable:true})
    every?: Identity<MoveFlagMapWhereInput>;

    @Field(() => MoveFlagMapWhereInput, {nullable:true})
    some?: Identity<MoveFlagMapWhereInput>;

    @Field(() => MoveFlagMapWhereInput, {nullable:true})
    none?: Identity<MoveFlagMapWhereInput>;
}
