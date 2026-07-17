import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GenerationsCreateInput } from './generations-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneGenerationsArgs {

    @Field(() => GenerationsCreateInput, {nullable:false})
    @Type(() => GenerationsCreateInput)
    data!: GenerationsCreateInput;
}
