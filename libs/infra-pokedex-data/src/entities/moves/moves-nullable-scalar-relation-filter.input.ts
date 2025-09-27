import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MovesWhereInput } from './moves-where.input';

@InputType()
export class MovesNullableScalarRelationFilter {

    @Field(() => MovesWhereInput, {nullable:true})
    is?: MovesWhereInput;

    @Field(() => MovesWhereInput, {nullable:true})
    isNot?: MovesWhereInput;
}
