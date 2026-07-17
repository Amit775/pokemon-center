import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PokemonEvolutionCreateInput } from './pokemon-evolution-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnePokemonEvolutionArgs {

    @Field(() => PokemonEvolutionCreateInput, {nullable:false})
    @Type(() => PokemonEvolutionCreateInput)
    data!: PokemonEvolutionCreateInput;
}
