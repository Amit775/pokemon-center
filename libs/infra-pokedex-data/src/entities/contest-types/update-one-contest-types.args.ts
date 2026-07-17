import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ContestTypesUpdateInput } from './contest-types-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@pokemon-center/prisma';
import { ContestTypesWhereUniqueInput } from './contest-types-where-unique.input';

@ArgsType()
export class UpdateOneContestTypesArgs {

    @Field(() => ContestTypesUpdateInput, {nullable:false})
    @Type(() => ContestTypesUpdateInput)
    data!: Identity<ContestTypesUpdateInput>;

    @Field(() => ContestTypesWhereUniqueInput, {nullable:false})
    @Type(() => ContestTypesWhereUniqueInput)
    where!: Prisma.AtLeast<ContestTypesWhereUniqueInput, 'id'>;
}
