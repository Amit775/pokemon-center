import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MoveDamageClassesWhereInput } from './move-damage-classes-where.input';

@InputType()
export class MoveDamageClassesNullableScalarRelationFilter {

    @Field(() => MoveDamageClassesWhereInput, {nullable:true})
    is?: MoveDamageClassesWhereInput;

    @Field(() => MoveDamageClassesWhereInput, {nullable:true})
    isNot?: MoveDamageClassesWhereInput;
}
