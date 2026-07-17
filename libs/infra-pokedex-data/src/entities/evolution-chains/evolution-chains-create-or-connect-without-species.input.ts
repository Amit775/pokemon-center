import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EvolutionChainsWhereUniqueInput } from './evolution-chains-where-unique.input';
import { Type } from 'class-transformer';
import { EvolutionChainsCreateWithoutSpeciesInput } from './evolution-chains-create-without-species.input';

@InputType()
export class EvolutionChainsCreateOrConnectWithoutSpeciesInput {

    @Field(() => EvolutionChainsWhereUniqueInput, {nullable:false})
    @Type(() => EvolutionChainsWhereUniqueInput)
    where!: Prisma.AtLeast<EvolutionChainsWhereUniqueInput, 'id'>;

    @Field(() => EvolutionChainsCreateWithoutSpeciesInput, {nullable:false})
    @Type(() => EvolutionChainsCreateWithoutSpeciesInput)
    create!: EvolutionChainsCreateWithoutSpeciesInput;
}
