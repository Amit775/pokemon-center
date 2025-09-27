import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContestTypesWhereInput } from './contest-types-where.input';

@InputType()
export class ContestTypesScalarRelationFilter {

    @Field(() => ContestTypesWhereInput, {nullable:true})
    is?: ContestTypesWhereInput;

    @Field(() => ContestTypesWhereInput, {nullable:true})
    isNot?: ContestTypesWhereInput;
}
