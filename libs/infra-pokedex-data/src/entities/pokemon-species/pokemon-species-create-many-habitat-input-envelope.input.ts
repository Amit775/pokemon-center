import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonSpeciesCreateManyHabitatInput } from './pokemon-species-create-many-habitat.input';
import { Type } from 'class-transformer';

@InputType()
export class PokemonSpeciesCreateManyHabitatInputEnvelope {

    @Field(() => [PokemonSpeciesCreateManyHabitatInput], {nullable:false})
    @Type(() => PokemonSpeciesCreateManyHabitatInput)
    data!: Array<PokemonSpeciesCreateManyHabitatInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
