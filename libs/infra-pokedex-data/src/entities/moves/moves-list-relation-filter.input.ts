import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MovesWhereInput } from './moves-where.input';

@InputType()
export class MovesListRelationFilter {

    @Field(() => MovesWhereInput, {nullable:true})
    every?: MovesWhereInput;

    @Field(() => MovesWhereInput, {nullable:true})
    some?: MovesWhereInput;

    @Field(() => MovesWhereInput, {nullable:true})
    none?: MovesWhereInput;
}
