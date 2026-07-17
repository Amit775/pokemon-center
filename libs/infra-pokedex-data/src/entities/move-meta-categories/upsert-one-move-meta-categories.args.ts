import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { MoveMetaCategoriesWhereUniqueInput } from './move-meta-categories-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { MoveMetaCategoriesCreateInput } from './move-meta-categories-create.input';
import { MoveMetaCategoriesUpdateInput } from './move-meta-categories-update.input';

@ArgsType()
export class UpsertOneMoveMetaCategoriesArgs {

    @Field(() => MoveMetaCategoriesWhereUniqueInput, {nullable:false})
    @Type(() => MoveMetaCategoriesWhereUniqueInput)
    where!: Prisma.AtLeast<MoveMetaCategoriesWhereUniqueInput, 'id'>;

    @Field(() => MoveMetaCategoriesCreateInput, {nullable:false})
    @Type(() => MoveMetaCategoriesCreateInput)
    create!: Identity<MoveMetaCategoriesCreateInput>;

    @Field(() => MoveMetaCategoriesUpdateInput, {nullable:false})
    @Type(() => MoveMetaCategoriesUpdateInput)
    update!: Identity<MoveMetaCategoriesUpdateInput>;
}
