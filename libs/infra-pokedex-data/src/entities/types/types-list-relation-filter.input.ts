import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { TypesWhereInput } from './types-where.input';

@InputType()
export class TypesListRelationFilter {

    @Field(() => TypesWhereInput, {nullable:true})
    every?: Identity<TypesWhereInput>;

    @Field(() => TypesWhereInput, {nullable:true})
    some?: Identity<TypesWhereInput>;

    @Field(() => TypesWhereInput, {nullable:true})
    none?: Identity<TypesWhereInput>;
}
