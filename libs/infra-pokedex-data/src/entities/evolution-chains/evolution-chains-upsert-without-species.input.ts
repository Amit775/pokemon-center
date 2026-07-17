import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EvolutionChainsUpdateWithoutSpeciesInput } from './evolution-chains-update-without-species.input';
import { Type } from 'class-transformer';
import { EvolutionChainsCreateWithoutSpeciesInput } from './evolution-chains-create-without-species.input';
import { EvolutionChainsWhereInput } from './evolution-chains-where.input';

@InputType()
export class EvolutionChainsUpsertWithoutSpeciesInput {

    @Field(() => EvolutionChainsUpdateWithoutSpeciesInput, {nullable:false})
    @Type(() => EvolutionChainsUpdateWithoutSpeciesInput)
    update!: EvolutionChainsUpdateWithoutSpeciesInput;

    @Field(() => EvolutionChainsCreateWithoutSpeciesInput, {nullable:false})
    @Type(() => EvolutionChainsCreateWithoutSpeciesInput)
    create!: EvolutionChainsCreateWithoutSpeciesInput;

    @Field(() => EvolutionChainsWhereInput, {nullable:true})
    @Type(() => EvolutionChainsWhereInput)
    where?: EvolutionChainsWhereInput;
}
