import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { GenerationsWhereInput } from './generations-where.input';

@InputType()
export class GenerationsScalarRelationFilter {

    @Field(() => GenerationsWhereInput, {nullable:true})
    is?: Identity<GenerationsWhereInput>;

    @Field(() => GenerationsWhereInput, {nullable:true})
    isNot?: Identity<GenerationsWhereInput>;
}
