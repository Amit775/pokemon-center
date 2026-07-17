import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MoveTargetsUpdateInput } from './move-targets-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@pokemon-center/prisma';
import { MoveTargetsWhereUniqueInput } from './move-targets-where-unique.input';

@ArgsType()
export class UpdateOneMoveTargetsArgs {

    @Field(() => MoveTargetsUpdateInput, {nullable:false})
    @Type(() => MoveTargetsUpdateInput)
    data!: Identity<MoveTargetsUpdateInput>;

    @Field(() => MoveTargetsWhereUniqueInput, {nullable:false})
    @Type(() => MoveTargetsWhereUniqueInput)
    where!: Prisma.AtLeast<MoveTargetsWhereUniqueInput, 'id'>;
}
