import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { TypeGameIndicesWhereInput } from './type-game-indices-where.input';

@InputType()
export class TypeGameIndicesListRelationFilter {

    @Field(() => TypeGameIndicesWhereInput, {nullable:true})
    every?: Identity<TypeGameIndicesWhereInput>;

    @Field(() => TypeGameIndicesWhereInput, {nullable:true})
    some?: Identity<TypeGameIndicesWhereInput>;

    @Field(() => TypeGameIndicesWhereInput, {nullable:true})
    none?: Identity<TypeGameIndicesWhereInput>;
}
