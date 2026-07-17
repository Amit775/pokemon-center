import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonSpeciesCreateManyGenerationInput } from './pokemon-species-create-many-generation.input';
import { Type } from 'class-transformer';

@InputType()
export class PokemonSpeciesCreateManyGenerationInputEnvelope {

    @Field(() => [PokemonSpeciesCreateManyGenerationInput], {nullable:false})
    @Type(() => PokemonSpeciesCreateManyGenerationInput)
    data!: Array<PokemonSpeciesCreateManyGenerationInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
