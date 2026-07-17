import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { EvolutionChainsCreateWithoutSpeciesInput } from './evolution-chains-create-without-species.input';
import { Type } from 'class-transformer';
import { EvolutionChainsCreateOrConnectWithoutSpeciesInput } from './evolution-chains-create-or-connect-without-species.input';
import { Prisma } from '@pokemon-center/prisma';
import { EvolutionChainsWhereUniqueInput } from './evolution-chains-where-unique.input';

@InputType()
export class EvolutionChainsCreateNestedOneWithoutSpeciesInput {

    @Field(() => EvolutionChainsCreateWithoutSpeciesInput, {nullable:true})
    @Type(() => EvolutionChainsCreateWithoutSpeciesInput)
    create?: Identity<EvolutionChainsCreateWithoutSpeciesInput>;

    @Field(() => EvolutionChainsCreateOrConnectWithoutSpeciesInput, {nullable:true})
    @Type(() => EvolutionChainsCreateOrConnectWithoutSpeciesInput)
    connectOrCreate?: Identity<EvolutionChainsCreateOrConnectWithoutSpeciesInput>;

    @Field(() => EvolutionChainsWhereUniqueInput, {nullable:true})
    @Type(() => EvolutionChainsWhereUniqueInput)
    connect?: Prisma.AtLeast<EvolutionChainsWhereUniqueInput, 'id'>;
}
