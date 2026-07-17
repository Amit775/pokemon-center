import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ContestTypesCreateInput } from './contest-types-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneContestTypesArgs {

    @Field(() => ContestTypesCreateInput, {nullable:false})
    @Type(() => ContestTypesCreateInput)
    data!: ContestTypesCreateInput;
}
