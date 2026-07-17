import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { MoveFlagsWhereUniqueInput } from './move-flags-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { MoveFlagsCreateInput } from './move-flags-create.input';
import { MoveFlagsUpdateInput } from './move-flags-update.input';

@ArgsType()
export class UpsertOneMoveFlagsArgs {

    @Field(() => MoveFlagsWhereUniqueInput, {nullable:false})
    @Type(() => MoveFlagsWhereUniqueInput)
    where!: Prisma.AtLeast<MoveFlagsWhereUniqueInput, 'id'>;

    @Field(() => MoveFlagsCreateInput, {nullable:false})
    @Type(() => MoveFlagsCreateInput)
    create!: Identity<MoveFlagsCreateInput>;

    @Field(() => MoveFlagsUpdateInput, {nullable:false})
    @Type(() => MoveFlagsUpdateInput)
    update!: Identity<MoveFlagsUpdateInput>;
}
