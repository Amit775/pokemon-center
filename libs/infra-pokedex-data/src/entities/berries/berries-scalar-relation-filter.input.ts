import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BerriesWhereInput } from './berries-where.input';

@InputType()
export class BerriesScalarRelationFilter {

    @Field(() => BerriesWhereInput, {nullable:true})
    is?: BerriesWhereInput;

    @Field(() => BerriesWhereInput, {nullable:true})
    isNot?: BerriesWhereInput;
}
