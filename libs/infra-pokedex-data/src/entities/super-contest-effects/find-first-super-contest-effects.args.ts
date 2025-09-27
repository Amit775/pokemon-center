import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SuperContestEffectsWhereInput } from './super-contest-effects-where.input';
import { Type } from 'class-transformer';
import { SuperContestEffectsOrderByWithRelationInput } from './super-contest-effects-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { SuperContestEffectsWhereUniqueInput } from './super-contest-effects-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SuperContestEffectsScalarFieldEnum } from './super-contest-effects-scalar-field.enum';

@ArgsType()
export class FindFirstSuperContestEffectsArgs {

    @Field(() => SuperContestEffectsWhereInput, {nullable:true})
    @Type(() => SuperContestEffectsWhereInput)
    where?: SuperContestEffectsWhereInput;

    @Field(() => [SuperContestEffectsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SuperContestEffectsOrderByWithRelationInput>;

    @Field(() => SuperContestEffectsWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<SuperContestEffectsWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [SuperContestEffectsScalarFieldEnum], {nullable:true})
    distinct?: Array<`${SuperContestEffectsScalarFieldEnum}`>;
}
