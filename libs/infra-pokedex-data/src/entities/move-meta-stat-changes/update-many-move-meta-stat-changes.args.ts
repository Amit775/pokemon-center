import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MoveMetaStatChangesUpdateManyMutationInput } from './move-meta-stat-changes-update-many-mutation.input';
import { Type } from 'class-transformer';
import { MoveMetaStatChangesWhereInput } from './move-meta-stat-changes-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyMoveMetaStatChangesArgs {

    @Field(() => MoveMetaStatChangesUpdateManyMutationInput, {nullable:false})
    @Type(() => MoveMetaStatChangesUpdateManyMutationInput)
    data!: Identity<MoveMetaStatChangesUpdateManyMutationInput>;

    @Field(() => MoveMetaStatChangesWhereInput, {nullable:true})
    @Type(() => MoveMetaStatChangesWhereInput)
    where?: Identity<MoveMetaStatChangesWhereInput>;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
