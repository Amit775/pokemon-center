import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MoveFlagsWhereUniqueInput } from './move-flags-where-unique.input';
import { Type } from 'class-transformer';
import { MoveFlagsCreateInput } from './move-flags-create.input';
import { MoveFlagsUpdateInput } from './move-flags-update.input';

@ArgsType()
export class UpsertOneMoveFlagsArgs {

    @Field(() => MoveFlagsWhereUniqueInput, {nullable:false})
    @Type(() => MoveFlagsWhereUniqueInput)
    where!: Prisma.AtLeast<MoveFlagsWhereUniqueInput, 'id'>;

    @Field(() => MoveFlagsCreateInput, {nullable:false})
    @Type(() => MoveFlagsCreateInput)
    create!: MoveFlagsCreateInput;

    @Field(() => MoveFlagsUpdateInput, {nullable:false})
    @Type(() => MoveFlagsUpdateInput)
    update!: MoveFlagsUpdateInput;
}
