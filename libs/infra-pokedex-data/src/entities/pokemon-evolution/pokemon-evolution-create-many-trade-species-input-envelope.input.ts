import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonEvolutionCreateManyTradeSpeciesInput } from './pokemon-evolution-create-many-trade-species.input';
import { Type } from 'class-transformer';

@InputType()
export class PokemonEvolutionCreateManyTradeSpeciesInputEnvelope {

    @Field(() => [PokemonEvolutionCreateManyTradeSpeciesInput], {nullable:false})
    @Type(() => PokemonEvolutionCreateManyTradeSpeciesInput)
    data!: Array<PokemonEvolutionCreateManyTradeSpeciesInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
