import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonEvolutionCreateManyPartySpeciesInput } from './pokemon-evolution-create-many-party-species.input';
import { Type } from 'class-transformer';

@InputType()
export class PokemonEvolutionCreateManyPartySpeciesInputEnvelope {

    @Field(() => [PokemonEvolutionCreateManyPartySpeciesInput], {nullable:false})
    @Type(() => PokemonEvolutionCreateManyPartySpeciesInput)
    data!: Array<PokemonEvolutionCreateManyPartySpeciesInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
