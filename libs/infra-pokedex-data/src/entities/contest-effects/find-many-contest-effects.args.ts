import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ContestEffectsWhereInput } from './contest-effects-where.input';
import { Type } from 'class-transformer';
import { ContestEffectsOrderByWithRelationInput } from './contest-effects-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ContestEffectsWhereUniqueInput } from './contest-effects-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ContestEffectsScalarFieldEnum } from './contest-effects-scalar-field.enum';

@ArgsType()
export class FindManyContestEffectsArgs {

    @Field(() => ContestEffectsWhereInput, {nullable:true})
    @Type(() => ContestEffectsWhereInput)
    where?: ContestEffectsWhereInput;

    @Field(() => [ContestEffectsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ContestEffectsOrderByWithRelationInput>;

    @Field(() => ContestEffectsWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ContestEffectsWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ContestEffectsScalarFieldEnum], {nullable:true})
    distinct?: Array<`${ContestEffectsScalarFieldEnum}`>;
}
