import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MoveTargetsWhereUniqueInput } from './move-targets-where-unique.input';
import { Type } from 'class-transformer';
import { MoveTargetsCreateInput } from './move-targets-create.input';
import { MoveTargetsUpdateInput } from './move-targets-update.input';

@ArgsType()
export class UpsertOneMoveTargetsArgs {

    @Field(() => MoveTargetsWhereUniqueInput, {nullable:false})
    @Type(() => MoveTargetsWhereUniqueInput)
    where!: Prisma.AtLeast<MoveTargetsWhereUniqueInput, 'id'>;

    @Field(() => MoveTargetsCreateInput, {nullable:false})
    @Type(() => MoveTargetsCreateInput)
    create!: MoveTargetsCreateInput;

    @Field(() => MoveTargetsUpdateInput, {nullable:false})
    @Type(() => MoveTargetsUpdateInput)
    update!: MoveTargetsUpdateInput;
}
