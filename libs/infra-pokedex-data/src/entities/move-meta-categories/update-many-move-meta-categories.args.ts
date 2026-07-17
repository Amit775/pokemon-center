import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MoveMetaCategoriesUpdateManyMutationInput } from './move-meta-categories-update-many-mutation.input';
import { Type } from 'class-transformer';
import { MoveMetaCategoriesWhereInput } from './move-meta-categories-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyMoveMetaCategoriesArgs {

    @Field(() => MoveMetaCategoriesUpdateManyMutationInput, {nullable:false})
    @Type(() => MoveMetaCategoriesUpdateManyMutationInput)
    data!: MoveMetaCategoriesUpdateManyMutationInput;

    @Field(() => MoveMetaCategoriesWhereInput, {nullable:true})
    @Type(() => MoveMetaCategoriesWhereInput)
    where?: MoveMetaCategoriesWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
