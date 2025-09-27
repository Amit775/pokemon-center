import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TypeGameIndicesWhereInput } from './type-game-indices-where.input';

@InputType()
export class TypeGameIndicesListRelationFilter {

    @Field(() => TypeGameIndicesWhereInput, {nullable:true})
    every?: TypeGameIndicesWhereInput;

    @Field(() => TypeGameIndicesWhereInput, {nullable:true})
    some?: TypeGameIndicesWhereInput;

    @Field(() => TypeGameIndicesWhereInput, {nullable:true})
    none?: TypeGameIndicesWhereInput;
}
