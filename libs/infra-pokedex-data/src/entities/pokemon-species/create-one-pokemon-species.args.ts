import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PokemonSpeciesCreateInput } from './pokemon-species-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnePokemonSpeciesArgs {

    @Field(() => PokemonSpeciesCreateInput, {nullable:false})
    @Type(() => PokemonSpeciesCreateInput)
    data!: PokemonSpeciesCreateInput;
}
