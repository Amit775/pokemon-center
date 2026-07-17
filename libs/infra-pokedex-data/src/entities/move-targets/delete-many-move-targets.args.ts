import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MoveTargetsWhereInput } from './move-targets-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyMoveTargetsArgs {

    @Field(() => MoveTargetsWhereInput, {nullable:true})
    @Type(() => MoveTargetsWhereInput)
    where?: Identity<MoveTargetsWhereInput>;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
