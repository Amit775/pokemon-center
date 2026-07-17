import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MoveFlagsCreateInput } from './move-flags-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneMoveFlagsArgs {

    @Field(() => MoveFlagsCreateInput, {nullable:false})
    @Type(() => MoveFlagsCreateInput)
    data!: MoveFlagsCreateInput;
}
