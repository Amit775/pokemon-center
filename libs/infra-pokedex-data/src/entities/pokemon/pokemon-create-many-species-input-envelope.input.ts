import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonCreateManySpeciesInput } from './pokemon-create-many-species.input';
import { Type } from 'class-transformer';

@InputType()
export class PokemonCreateManySpeciesInputEnvelope {

    @Field(() => [PokemonCreateManySpeciesInput], {nullable:false})
    @Type(() => PokemonCreateManySpeciesInput)
    data!: Array<PokemonCreateManySpeciesInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
