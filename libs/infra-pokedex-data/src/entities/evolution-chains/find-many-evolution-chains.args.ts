import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { EvolutionChainsWhereInput } from './evolution-chains-where.input';
import { Type } from 'class-transformer';
import { EvolutionChainsOrderByWithRelationInput } from './evolution-chains-order-by-with-relation.input';
import { Prisma } from '@pokemon-center/prisma';
import { EvolutionChainsWhereUniqueInput } from './evolution-chains-where-unique.input';
import { Int } from '@nestjs/graphql';
import { EvolutionChainsScalarFieldEnum } from './evolution-chains-scalar-field.enum';

@ArgsType()
export class FindManyEvolutionChainsArgs {

    @Field(() => EvolutionChainsWhereInput, {nullable:true})
    @Type(() => EvolutionChainsWhereInput)
    where?: Identity<EvolutionChainsWhereInput>;

    @Field(() => [EvolutionChainsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<EvolutionChainsOrderByWithRelationInput>;

    @Field(() => EvolutionChainsWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<EvolutionChainsWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [EvolutionChainsScalarFieldEnum], {nullable:true})
    distinct?: Array<`${EvolutionChainsScalarFieldEnum}`>;
}
