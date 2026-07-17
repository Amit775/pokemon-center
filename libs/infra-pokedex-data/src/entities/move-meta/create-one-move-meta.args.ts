import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MoveMetaCreateInput } from './move-meta-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneMoveMetaArgs {

    @Field(() => MoveMetaCreateInput, {nullable:false})
    @Type(() => MoveMetaCreateInput)
    data!: Identity<MoveMetaCreateInput>;
}
