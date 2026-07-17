import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { EvolutionChainsWhereInput } from './evolution-chains-where.input';
import { Type } from 'class-transformer';
import { EvolutionChainsUpdateWithoutSpeciesInput } from './evolution-chains-update-without-species.input';

@InputType()
export class EvolutionChainsUpdateToOneWithWhereWithoutSpeciesInput {

    @Field(() => EvolutionChainsWhereInput, {nullable:true})
    @Type(() => EvolutionChainsWhereInput)
    where?: Identity<EvolutionChainsWhereInput>;

    @Field(() => EvolutionChainsUpdateWithoutSpeciesInput, {nullable:false})
    @Type(() => EvolutionChainsUpdateWithoutSpeciesInput)
    data!: Identity<EvolutionChainsUpdateWithoutSpeciesInput>;
}
