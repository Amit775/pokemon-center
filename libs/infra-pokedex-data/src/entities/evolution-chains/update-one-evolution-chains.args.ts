import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { EvolutionChainsUpdateInput } from './evolution-chains-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@pokemon-center/prisma';
import { EvolutionChainsWhereUniqueInput } from './evolution-chains-where-unique.input';

@ArgsType()
export class UpdateOneEvolutionChainsArgs {

    @Field(() => EvolutionChainsUpdateInput, {nullable:false})
    @Type(() => EvolutionChainsUpdateInput)
    data!: Identity<EvolutionChainsUpdateInput>;

    @Field(() => EvolutionChainsWhereUniqueInput, {nullable:false})
    @Type(() => EvolutionChainsWhereUniqueInput)
    where!: Prisma.AtLeast<EvolutionChainsWhereUniqueInput, 'id'>;
}
