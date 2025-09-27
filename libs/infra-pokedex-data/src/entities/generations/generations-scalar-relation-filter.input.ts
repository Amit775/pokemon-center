import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GenerationsWhereInput } from './generations-where.input';

@InputType()
export class GenerationsScalarRelationFilter {

    @Field(() => GenerationsWhereInput, {nullable:true})
    is?: GenerationsWhereInput;

    @Field(() => GenerationsWhereInput, {nullable:true})
    isNot?: GenerationsWhereInput;
}
