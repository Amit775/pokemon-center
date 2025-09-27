import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TypesWhereInput } from './types-where.input';

@InputType()
export class TypesNullableScalarRelationFilter {

    @Field(() => TypesWhereInput, {nullable:true})
    is?: TypesWhereInput;

    @Field(() => TypesWhereInput, {nullable:true})
    isNot?: TypesWhereInput;
}
