import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TypeEfficacyWhereInput } from './type-efficacy-where.input';

@InputType()
export class TypeEfficacyListRelationFilter {

    @Field(() => TypeEfficacyWhereInput, {nullable:true})
    every?: TypeEfficacyWhereInput;

    @Field(() => TypeEfficacyWhereInput, {nullable:true})
    some?: TypeEfficacyWhereInput;

    @Field(() => TypeEfficacyWhereInput, {nullable:true})
    none?: TypeEfficacyWhereInput;
}
