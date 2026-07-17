import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MoveMetaStatChangesCreateInput } from './move-meta-stat-changes-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneMoveMetaStatChangesArgs {

    @Field(() => MoveMetaStatChangesCreateInput, {nullable:false})
    @Type(() => MoveMetaStatChangesCreateInput)
    data!: Identity<MoveMetaStatChangesCreateInput>;
}
