import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ContestCombosWhereInput } from './contest-combos-where.input';
import { Type } from 'class-transformer';
import { ContestCombosOrderByWithRelationInput } from './contest-combos-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ContestCombosWhereUniqueInput } from './contest-combos-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ContestCombosScalarFieldEnum } from './contest-combos-scalar-field.enum';

@ArgsType()
export class FindFirstContestCombosArgs {

    @Field(() => ContestCombosWhereInput, {nullable:true})
    @Type(() => ContestCombosWhereInput)
    where?: ContestCombosWhereInput;

    @Field(() => [ContestCombosOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ContestCombosOrderByWithRelationInput>;

    @Field(() => ContestCombosWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ContestCombosWhereUniqueInput, 'first_move_id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ContestCombosScalarFieldEnum], {nullable:true})
    distinct?: Array<`${ContestCombosScalarFieldEnum}`>;
}
