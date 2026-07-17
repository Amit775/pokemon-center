import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MoveTargetsUpdateManyMutationInput } from './move-targets-update-many-mutation.input';
import { Type } from 'class-transformer';
import { MoveTargetsWhereInput } from './move-targets-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyMoveTargetsArgs {

    @Field(() => MoveTargetsUpdateManyMutationInput, {nullable:false})
    @Type(() => MoveTargetsUpdateManyMutationInput)
    data!: Identity<MoveTargetsUpdateManyMutationInput>;

    @Field(() => MoveTargetsWhereInput, {nullable:true})
    @Type(() => MoveTargetsWhereInput)
    where?: Identity<MoveTargetsWhereInput>;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
