import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MoveMetaCategoriesWhereInput } from './move-meta-categories-where.input';

@InputType()
export class MoveMetaCategoriesScalarRelationFilter {

    @Field(() => MoveMetaCategoriesWhereInput, {nullable:true})
    is?: MoveMetaCategoriesWhereInput;

    @Field(() => MoveMetaCategoriesWhereInput, {nullable:true})
    isNot?: MoveMetaCategoriesWhereInput;
}
