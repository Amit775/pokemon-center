import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MoveMetaCategoriesUpdateInput } from './move-meta-categories-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { MoveMetaCategoriesWhereUniqueInput } from './move-meta-categories-where-unique.input';

@ArgsType()
export class UpdateOneMoveMetaCategoriesArgs {

    @Field(() => MoveMetaCategoriesUpdateInput, {nullable:false})
    @Type(() => MoveMetaCategoriesUpdateInput)
    data!: MoveMetaCategoriesUpdateInput;

    @Field(() => MoveMetaCategoriesWhereUniqueInput, {nullable:false})
    @Type(() => MoveMetaCategoriesWhereUniqueInput)
    where!: Prisma.AtLeast<MoveMetaCategoriesWhereUniqueInput, 'id'>;
}
