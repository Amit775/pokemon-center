import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MoveMetaUpdateInput } from './move-meta-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { MoveMetaWhereUniqueInput } from './move-meta-where-unique.input';

@ArgsType()
export class UpdateOneMoveMetaArgs {

    @Field(() => MoveMetaUpdateInput, {nullable:false})
    @Type(() => MoveMetaUpdateInput)
    data!: MoveMetaUpdateInput;

    @Field(() => MoveMetaWhereUniqueInput, {nullable:false})
    @Type(() => MoveMetaWhereUniqueInput)
    where!: Prisma.AtLeast<MoveMetaWhereUniqueInput, 'move_id'>;
}
