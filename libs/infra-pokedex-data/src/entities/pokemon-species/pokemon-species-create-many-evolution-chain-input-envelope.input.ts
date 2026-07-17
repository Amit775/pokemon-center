import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonSpeciesCreateManyEvolutionChainInput } from './pokemon-species-create-many-evolution-chain.input';
import { Type } from 'class-transformer';

@InputType()
export class PokemonSpeciesCreateManyEvolutionChainInputEnvelope {

    @Field(() => [PokemonSpeciesCreateManyEvolutionChainInput], {nullable:false})
    @Type(() => PokemonSpeciesCreateManyEvolutionChainInput)
    data!: Array<PokemonSpeciesCreateManyEvolutionChainInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
