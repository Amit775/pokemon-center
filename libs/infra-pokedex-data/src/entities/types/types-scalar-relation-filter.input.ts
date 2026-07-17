import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { TypesWhereInput } from './types-where.input';

@InputType()
export class TypesScalarRelationFilter {

    @Field(() => TypesWhereInput, {nullable:true})
    is?: Identity<TypesWhereInput>;

    @Field(() => TypesWhereInput, {nullable:true})
    isNot?: Identity<TypesWhereInput>;
}
