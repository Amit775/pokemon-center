import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MoveMetaCategoriesWhereUniqueInput } from './move-meta-categories-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueMoveMetaCategoriesOrThrowArgs {

    @Field(() => MoveMetaCategoriesWhereUniqueInput, {nullable:false})
    @Type(() => MoveMetaCategoriesWhereUniqueInput)
    where!: Prisma.AtLeast<MoveMetaCategoriesWhereUniqueInput, 'id'>;
}
