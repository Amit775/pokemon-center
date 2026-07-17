import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MoveTargetsCreateInput } from './move-targets-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneMoveTargetsArgs {

    @Field(() => MoveTargetsCreateInput, {nullable:false})
    @Type(() => MoveTargetsCreateInput)
    data!: MoveTargetsCreateInput;
}
