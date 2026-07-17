import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MoveMetaAilmentsWhereInput } from './move-meta-ailments-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyMoveMetaAilmentsArgs {

    @Field(() => MoveMetaAilmentsWhereInput, {nullable:true})
    @Type(() => MoveMetaAilmentsWhereInput)
    where?: Identity<MoveMetaAilmentsWhereInput>;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
