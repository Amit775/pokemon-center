import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TypesWhereInput } from './types-where.input';

@InputType()
export class TypesListRelationFilter {

    @Field(() => TypesWhereInput, {nullable:true})
    every?: TypesWhereInput;

    @Field(() => TypesWhereInput, {nullable:true})
    some?: TypesWhereInput;

    @Field(() => TypesWhereInput, {nullable:true})
    none?: TypesWhereInput;
}
