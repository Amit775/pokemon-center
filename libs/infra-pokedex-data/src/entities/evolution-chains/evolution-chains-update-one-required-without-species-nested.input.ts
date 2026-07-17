import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { EvolutionChainsCreateWithoutSpeciesInput } from './evolution-chains-create-without-species.input';
import { Type } from 'class-transformer';
import { EvolutionChainsCreateOrConnectWithoutSpeciesInput } from './evolution-chains-create-or-connect-without-species.input';
import { EvolutionChainsUpsertWithoutSpeciesInput } from './evolution-chains-upsert-without-species.input';
import { Prisma } from '@pokemon-center/prisma';
import { EvolutionChainsWhereUniqueInput } from './evolution-chains-where-unique.input';
import { EvolutionChainsUpdateToOneWithWhereWithoutSpeciesInput } from './evolution-chains-update-to-one-with-where-without-species.input';

@InputType()
export class EvolutionChainsUpdateOneRequiredWithoutSpeciesNestedInput {

    @Field(() => EvolutionChainsCreateWithoutSpeciesInput, {nullable:true})
    @Type(() => EvolutionChainsCreateWithoutSpeciesInput)
    create?: Identity<EvolutionChainsCreateWithoutSpeciesInput>;

    @Field(() => EvolutionChainsCreateOrConnectWithoutSpeciesInput, {nullable:true})
    @Type(() => EvolutionChainsCreateOrConnectWithoutSpeciesInput)
    connectOrCreate?: Identity<EvolutionChainsCreateOrConnectWithoutSpeciesInput>;

    @Field(() => EvolutionChainsUpsertWithoutSpeciesInput, {nullable:true})
    @Type(() => EvolutionChainsUpsertWithoutSpeciesInput)
    upsert?: Identity<EvolutionChainsUpsertWithoutSpeciesInput>;

    @Field(() => EvolutionChainsWhereUniqueInput, {nullable:true})
    @Type(() => EvolutionChainsWhereUniqueInput)
    connect?: Prisma.AtLeast<EvolutionChainsWhereUniqueInput, 'id'>;

    @Field(() => EvolutionChainsUpdateToOneWithWhereWithoutSpeciesInput, {nullable:true})
    @Type(() => EvolutionChainsUpdateToOneWithWhereWithoutSpeciesInput)
    update?: Identity<EvolutionChainsUpdateToOneWithWhereWithoutSpeciesInput>;
}
