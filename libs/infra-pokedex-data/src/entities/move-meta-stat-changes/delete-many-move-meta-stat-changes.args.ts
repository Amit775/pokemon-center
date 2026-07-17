import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MoveMetaStatChangesWhereInput } from './move-meta-stat-changes-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyMoveMetaStatChangesArgs {

    @Field(() => MoveMetaStatChangesWhereInput, {nullable:true})
    @Type(() => MoveMetaStatChangesWhereInput)
    where?: MoveMetaStatChangesWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
