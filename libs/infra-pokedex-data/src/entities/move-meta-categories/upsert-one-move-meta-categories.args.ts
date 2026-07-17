import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MoveMetaCategoriesWhereUniqueInput } from './move-meta-categories-where-unique.input';
import { Type } from 'class-transformer';
import { MoveMetaCategoriesCreateInput } from './move-meta-categories-create.input';
import { MoveMetaCategoriesUpdateInput } from './move-meta-categories-update.input';

@ArgsType()
export class UpsertOneMoveMetaCategoriesArgs {

    @Field(() => MoveMetaCategoriesWhereUniqueInput, {nullable:false})
    @Type(() => MoveMetaCategoriesWhereUniqueInput)
    where!: Prisma.AtLeast<MoveMetaCategoriesWhereUniqueInput, 'id'>;

    @Field(() => MoveMetaCategoriesCreateInput, {nullable:false})
    @Type(() => MoveMetaCategoriesCreateInput)
    create!: MoveMetaCategoriesCreateInput;

    @Field(() => MoveMetaCategoriesUpdateInput, {nullable:false})
    @Type(() => MoveMetaCategoriesUpdateInput)
    update!: MoveMetaCategoriesUpdateInput;
}
