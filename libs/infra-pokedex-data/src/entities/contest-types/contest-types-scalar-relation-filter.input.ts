import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ContestTypesWhereInput } from './contest-types-where.input';

@InputType()
export class ContestTypesScalarRelationFilter {

    @Field(() => ContestTypesWhereInput, {nullable:true})
    is?: Identity<ContestTypesWhereInput>;

    @Field(() => ContestTypesWhereInput, {nullable:true})
    isNot?: Identity<ContestTypesWhereInput>;
}
