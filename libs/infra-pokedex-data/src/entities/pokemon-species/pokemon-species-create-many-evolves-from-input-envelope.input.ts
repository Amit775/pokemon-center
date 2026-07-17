import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonSpeciesCreateManyEvolvesFromInput } from './pokemon-species-create-many-evolves-from.input';
import { Type } from 'class-transformer';

@InputType()
export class PokemonSpeciesCreateManyEvolvesFromInputEnvelope {

    @Field(() => [PokemonSpeciesCreateManyEvolvesFromInput], {nullable:false})
    @Type(() => PokemonSpeciesCreateManyEvolvesFromInput)
    data!: Array<PokemonSpeciesCreateManyEvolvesFromInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
