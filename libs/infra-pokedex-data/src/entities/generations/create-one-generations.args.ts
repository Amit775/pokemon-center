import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { GenerationsCreateInput } from './generations-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneGenerationsArgs {

    @Field(() => GenerationsCreateInput, {nullable:false})
    @Type(() => GenerationsCreateInput)
    data!: Identity<GenerationsCreateInput>;
}
