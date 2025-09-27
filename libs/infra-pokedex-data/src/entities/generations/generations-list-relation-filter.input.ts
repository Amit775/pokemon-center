import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GenerationsWhereInput } from './generations-where.input';

@InputType()
export class GenerationsListRelationFilter {

    @Field(() => GenerationsWhereInput, {nullable:true})
    every?: GenerationsWhereInput;

    @Field(() => GenerationsWhereInput, {nullable:true})
    some?: GenerationsWhereInput;

    @Field(() => GenerationsWhereInput, {nullable:true})
    none?: GenerationsWhereInput;
}
