import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SuperContestCombosWhereInput } from './super-contest-combos-where.input';
import { Type } from 'class-transformer';
import { SuperContestCombosOrderByWithRelationInput } from './super-contest-combos-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { SuperContestCombosWhereUniqueInput } from './super-contest-combos-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SuperContestCombosScalarFieldEnum } from './super-contest-combos-scalar-field.enum';

@ArgsType()
export class FindFirstSuperContestCombosArgs {

    @Field(() => SuperContestCombosWhereInput, {nullable:true})
    @Type(() => SuperContestCombosWhereInput)
    where?: SuperContestCombosWhereInput;

    @Field(() => [SuperContestCombosOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SuperContestCombosOrderByWithRelationInput>;

    @Field(() => SuperContestCombosWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<SuperContestCombosWhereUniqueInput, 'first_move_id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [SuperContestCombosScalarFieldEnum], {nullable:true})
    distinct?: Array<`${SuperContestCombosScalarFieldEnum}`>;
}
