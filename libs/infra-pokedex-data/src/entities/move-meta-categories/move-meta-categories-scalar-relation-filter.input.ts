import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MoveMetaCategoriesWhereInput } from './move-meta-categories-where.input';

@InputType()
export class MoveMetaCategoriesScalarRelationFilter {

    @Field(() => MoveMetaCategoriesWhereInput, {nullable:true})
    is?: Identity<MoveMetaCategoriesWhereInput>;

    @Field(() => MoveMetaCategoriesWhereInput, {nullable:true})
    isNot?: Identity<MoveMetaCategoriesWhereInput>;
}
