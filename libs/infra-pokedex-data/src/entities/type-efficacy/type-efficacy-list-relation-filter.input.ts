import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { TypeEfficacyWhereInput } from './type-efficacy-where.input';

@InputType()
export class TypeEfficacyListRelationFilter {

    @Field(() => TypeEfficacyWhereInput, {nullable:true})
    every?: Identity<TypeEfficacyWhereInput>;

    @Field(() => TypeEfficacyWhereInput, {nullable:true})
    some?: Identity<TypeEfficacyWhereInput>;

    @Field(() => TypeEfficacyWhereInput, {nullable:true})
    none?: Identity<TypeEfficacyWhereInput>;
}
