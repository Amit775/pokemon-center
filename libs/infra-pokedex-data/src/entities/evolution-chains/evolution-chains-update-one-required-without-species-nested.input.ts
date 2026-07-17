import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EvolutionChainsCreateWithoutSpeciesInput } from './evolution-chains-create-without-species.input';
import { Type } from 'class-transformer';
import { EvolutionChainsCreateOrConnectWithoutSpeciesInput } from './evolution-chains-create-or-connect-without-species.input';
import { EvolutionChainsUpsertWithoutSpeciesInput } from './evolution-chains-upsert-without-species.input';
import { Prisma } from '@prisma/client';
import { EvolutionChainsWhereUniqueInput } from './evolution-chains-where-unique.input';
import { EvolutionChainsUpdateToOneWithWhereWithoutSpeciesInput } from './evolution-chains-update-to-one-with-where-without-species.input';

@InputType()
export class EvolutionChainsUpdateOneRequiredWithoutSpeciesNestedInput {

    @Field(() => EvolutionChainsCreateWithoutSpeciesInput, {nullable:true})
    @Type(() => EvolutionChainsCreateWithoutSpeciesInput)
    create?: EvolutionChainsCreateWithoutSpeciesInput;

    @Field(() => EvolutionChainsCreateOrConnectWithoutSpeciesInput, {nullable:true})
    @Type(() => EvolutionChainsCreateOrConnectWithoutSpeciesInput)
    connectOrCreate?: EvolutionChainsCreateOrConnectWithoutSpeciesInput;

    @Field(() => EvolutionChainsUpsertWithoutSpeciesInput, {nullable:true})
    @Type(() => EvolutionChainsUpsertWithoutSpeciesInput)
    upsert?: EvolutionChainsUpsertWithoutSpeciesInput;

    @Field(() => EvolutionChainsWhereUniqueInput, {nullable:true})
    @Type(() => EvolutionChainsWhereUniqueInput)
    connect?: Prisma.AtLeast<EvolutionChainsWhereUniqueInput, 'id'>;

    @Field(() => EvolutionChainsUpdateToOneWithWhereWithoutSpeciesInput, {nullable:true})
    @Type(() => EvolutionChainsUpdateToOneWithWhereWithoutSpeciesInput)
    update?: EvolutionChainsUpdateToOneWithWhereWithoutSpeciesInput;
}
