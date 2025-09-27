import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BerriesWhereInput } from './berries-where.input';

@InputType()
export class BerriesListRelationFilter {

    @Field(() => BerriesWhereInput, {nullable:true})
    every?: BerriesWhereInput;

    @Field(() => BerriesWhereInput, {nullable:true})
    some?: BerriesWhereInput;

    @Field(() => BerriesWhereInput, {nullable:true})
    none?: BerriesWhereInput;
}
