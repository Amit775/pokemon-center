import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EvolutionChainsWhereUniqueInput } from './evolution-chains-where-unique.input';
import { Type } from 'class-transformer';
import { EvolutionChainsCreateInput } from './evolution-chains-create.input';
import { EvolutionChainsUpdateInput } from './evolution-chains-update.input';

@ArgsType()
export class UpsertOneEvolutionChainsArgs {

    @Field(() => EvolutionChainsWhereUniqueInput, {nullable:false})
    @Type(() => EvolutionChainsWhereUniqueInput)
    where!: Prisma.AtLeast<EvolutionChainsWhereUniqueInput, 'id'>;

    @Field(() => EvolutionChainsCreateInput, {nullable:false})
    @Type(() => EvolutionChainsCreateInput)
    create!: EvolutionChainsCreateInput;

    @Field(() => EvolutionChainsUpdateInput, {nullable:false})
    @Type(() => EvolutionChainsUpdateInput)
    update!: EvolutionChainsUpdateInput;
}
