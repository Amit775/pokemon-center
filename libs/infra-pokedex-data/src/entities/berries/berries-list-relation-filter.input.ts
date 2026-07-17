import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { BerriesWhereInput } from './berries-where.input';

@InputType()
export class BerriesListRelationFilter {

    @Field(() => BerriesWhereInput, {nullable:true})
    every?: Identity<BerriesWhereInput>;

    @Field(() => BerriesWhereInput, {nullable:true})
    some?: Identity<BerriesWhereInput>;

    @Field(() => BerriesWhereInput, {nullable:true})
    none?: Identity<BerriesWhereInput>;
}
