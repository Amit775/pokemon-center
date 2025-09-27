import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonEvolutionWhereInput } from './pokemon-evolution-where.input';

@InputType()
export class PokemonEvolutionListRelationFilter {

    @Field(() => PokemonEvolutionWhereInput, {nullable:true})
    every?: PokemonEvolutionWhereInput;

    @Field(() => PokemonEvolutionWhereInput, {nullable:true})
    some?: PokemonEvolutionWhereInput;

    @Field(() => PokemonEvolutionWhereInput, {nullable:true})
    none?: PokemonEvolutionWhereInput;
}
