import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ContestTypesUpdateManyMutationInput } from './contest-types-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ContestTypesWhereInput } from './contest-types-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyContestTypesArgs {

    @Field(() => ContestTypesUpdateManyMutationInput, {nullable:false})
    @Type(() => ContestTypesUpdateManyMutationInput)
    data!: Identity<ContestTypesUpdateManyMutationInput>;

    @Field(() => ContestTypesWhereInput, {nullable:true})
    @Type(() => ContestTypesWhereInput)
    where?: Identity<ContestTypesWhereInput>;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
