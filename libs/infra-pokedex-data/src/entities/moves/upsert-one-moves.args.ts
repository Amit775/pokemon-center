import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { MovesWhereUniqueInput } from './moves-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { MovesCreateInput } from './moves-create.input';
import { MovesUpdateInput } from './moves-update.input';

@ArgsType()
export class UpsertOneMovesArgs {

    @Field(() => MovesWhereUniqueInput, {nullable:false})
    @Type(() => MovesWhereUniqueInput)
    where!: Prisma.AtLeast<MovesWhereUniqueInput, 'id'>;

    @Field(() => MovesCreateInput, {nullable:false})
    @Type(() => MovesCreateInput)
    create!: Identity<MovesCreateInput>;

    @Field(() => MovesUpdateInput, {nullable:false})
    @Type(() => MovesUpdateInput)
    update!: Identity<MovesUpdateInput>;
}
