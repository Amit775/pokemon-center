import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ContestTypesCreateManyInput } from './contest-types-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyContestTypesArgs {

    @Field(() => [ContestTypesCreateManyInput], {nullable:false})
    @Type(() => ContestTypesCreateManyInput)
    data!: Array<ContestTypesCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
