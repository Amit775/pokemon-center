import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ContestTypesCreateInput } from './contest-types-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneContestTypesArgs {

    @Field(() => ContestTypesCreateInput, {nullable:false})
    @Type(() => ContestTypesCreateInput)
    data!: Identity<ContestTypesCreateInput>;
}
