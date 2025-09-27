import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MoveFlagsWhereUniqueInput } from './move-flags-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueMoveFlagsArgs {

    @Field(() => MoveFlagsWhereUniqueInput, {nullable:false})
    @Type(() => MoveFlagsWhereUniqueInput)
    where!: Prisma.AtLeast<MoveFlagsWhereUniqueInput, 'id'>;
}
