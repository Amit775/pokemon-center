import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MoveMetaCreateInput } from './move-meta-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneMoveMetaArgs {

    @Field(() => MoveMetaCreateInput, {nullable:false})
    @Type(() => MoveMetaCreateInput)
    data!: MoveMetaCreateInput;
}
