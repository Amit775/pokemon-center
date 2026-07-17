import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { EvolutionChainsWhereUniqueInput } from './evolution-chains-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { EvolutionChainsCreateWithoutSpeciesInput } from './evolution-chains-create-without-species.input';

@InputType()
export class EvolutionChainsCreateOrConnectWithoutSpeciesInput {

    @Field(() => EvolutionChainsWhereUniqueInput, {nullable:false})
    @Type(() => EvolutionChainsWhereUniqueInput)
    where!: Prisma.AtLeast<EvolutionChainsWhereUniqueInput, 'id'>;

    @Field(() => EvolutionChainsCreateWithoutSpeciesInput, {nullable:false})
    @Type(() => EvolutionChainsCreateWithoutSpeciesInput)
    create!: Identity<EvolutionChainsCreateWithoutSpeciesInput>;
}
