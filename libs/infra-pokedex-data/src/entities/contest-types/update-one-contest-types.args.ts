import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ContestTypesUpdateInput } from './contest-types-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ContestTypesWhereUniqueInput } from './contest-types-where-unique.input';

@ArgsType()
export class UpdateOneContestTypesArgs {

    @Field(() => ContestTypesUpdateInput, {nullable:false})
    @Type(() => ContestTypesUpdateInput)
    data!: ContestTypesUpdateInput;

    @Field(() => ContestTypesWhereUniqueInput, {nullable:false})
    @Type(() => ContestTypesWhereUniqueInput)
    where!: Prisma.AtLeast<ContestTypesWhereUniqueInput, 'id'>;
}
