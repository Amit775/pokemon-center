import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MoveMetaCategoriesWhereInput } from './move-meta-categories-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyMoveMetaCategoriesArgs {

    @Field(() => MoveMetaCategoriesWhereInput, {nullable:true})
    @Type(() => MoveMetaCategoriesWhereInput)
    where?: MoveMetaCategoriesWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
