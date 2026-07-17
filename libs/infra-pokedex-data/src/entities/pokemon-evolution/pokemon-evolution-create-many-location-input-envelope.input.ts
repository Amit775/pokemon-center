import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonEvolutionCreateManyLocationInput } from './pokemon-evolution-create-many-location.input';
import { Type } from 'class-transformer';

@InputType()
export class PokemonEvolutionCreateManyLocationInputEnvelope {

    @Field(() => [PokemonEvolutionCreateManyLocationInput], {nullable:false})
    @Type(() => PokemonEvolutionCreateManyLocationInput)
    data!: Array<PokemonEvolutionCreateManyLocationInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
