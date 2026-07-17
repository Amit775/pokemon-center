import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonEvolutionCreateManyEvolvedSpeciesInput } from './pokemon-evolution-create-many-evolved-species.input';
import { Type } from 'class-transformer';

@InputType()
export class PokemonEvolutionCreateManyEvolvedSpeciesInputEnvelope {

    @Field(() => [PokemonEvolutionCreateManyEvolvedSpeciesInput], {nullable:false})
    @Type(() => PokemonEvolutionCreateManyEvolvedSpeciesInput)
    data!: Array<PokemonEvolutionCreateManyEvolvedSpeciesInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
