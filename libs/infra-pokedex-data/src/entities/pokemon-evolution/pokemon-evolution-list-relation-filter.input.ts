import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonEvolutionWhereInput } from './pokemon-evolution-where.input';

@InputType()
export class PokemonEvolutionListRelationFilter {

    @Field(() => PokemonEvolutionWhereInput, {nullable:true})
    every?: Identity<PokemonEvolutionWhereInput>;

    @Field(() => PokemonEvolutionWhereInput, {nullable:true})
    some?: Identity<PokemonEvolutionWhereInput>;

    @Field(() => PokemonEvolutionWhereInput, {nullable:true})
    none?: Identity<PokemonEvolutionWhereInput>;
}
