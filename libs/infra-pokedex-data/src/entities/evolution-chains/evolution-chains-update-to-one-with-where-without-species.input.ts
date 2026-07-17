import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EvolutionChainsWhereInput } from './evolution-chains-where.input';
import { Type } from 'class-transformer';
import { EvolutionChainsUpdateWithoutSpeciesInput } from './evolution-chains-update-without-species.input';

@InputType()
export class EvolutionChainsUpdateToOneWithWhereWithoutSpeciesInput {

    @Field(() => EvolutionChainsWhereInput, {nullable:true})
    @Type(() => EvolutionChainsWhereInput)
    where?: EvolutionChainsWhereInput;

    @Field(() => EvolutionChainsUpdateWithoutSpeciesInput, {nullable:false})
    @Type(() => EvolutionChainsUpdateWithoutSpeciesInput)
    data!: EvolutionChainsUpdateWithoutSpeciesInput;
}
