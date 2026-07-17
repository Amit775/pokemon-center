import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EvolutionChainsCreateWithoutSpeciesInput } from './evolution-chains-create-without-species.input';
import { Type } from 'class-transformer';
import { EvolutionChainsCreateOrConnectWithoutSpeciesInput } from './evolution-chains-create-or-connect-without-species.input';
import { Prisma } from '@prisma/client';
import { EvolutionChainsWhereUniqueInput } from './evolution-chains-where-unique.input';

@InputType()
export class EvolutionChainsCreateNestedOneWithoutSpeciesInput {

    @Field(() => EvolutionChainsCreateWithoutSpeciesInput, {nullable:true})
    @Type(() => EvolutionChainsCreateWithoutSpeciesInput)
    create?: EvolutionChainsCreateWithoutSpeciesInput;

    @Field(() => EvolutionChainsCreateOrConnectWithoutSpeciesInput, {nullable:true})
    @Type(() => EvolutionChainsCreateOrConnectWithoutSpeciesInput)
    connectOrCreate?: EvolutionChainsCreateOrConnectWithoutSpeciesInput;

    @Field(() => EvolutionChainsWhereUniqueInput, {nullable:true})
    @Type(() => EvolutionChainsWhereUniqueInput)
    connect?: Prisma.AtLeast<EvolutionChainsWhereUniqueInput, 'id'>;
}
