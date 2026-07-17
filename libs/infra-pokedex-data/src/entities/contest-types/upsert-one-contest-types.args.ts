import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ContestTypesWhereUniqueInput } from './contest-types-where-unique.input';
import { Type } from 'class-transformer';
import { ContestTypesCreateInput } from './contest-types-create.input';
import { ContestTypesUpdateInput } from './contest-types-update.input';

@ArgsType()
export class UpsertOneContestTypesArgs {

    @Field(() => ContestTypesWhereUniqueInput, {nullable:false})
    @Type(() => ContestTypesWhereUniqueInput)
    where!: Prisma.AtLeast<ContestTypesWhereUniqueInput, 'id'>;

    @Field(() => ContestTypesCreateInput, {nullable:false})
    @Type(() => ContestTypesCreateInput)
    create!: ContestTypesCreateInput;

    @Field(() => ContestTypesUpdateInput, {nullable:false})
    @Type(() => ContestTypesUpdateInput)
    update!: ContestTypesUpdateInput;
}
