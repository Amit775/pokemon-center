import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonEvolutionUpdateManyMutationInput } from './pokemon-evolution-update-many-mutation.input';
import { Type } from 'class-transformer';
import { PokemonEvolutionWhereInput } from './pokemon-evolution-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyPokemonEvolutionArgs {

    @Field(() => PokemonEvolutionUpdateManyMutationInput, {nullable:false})
    @Type(() => PokemonEvolutionUpdateManyMutationInput)
    data!: Identity<PokemonEvolutionUpdateManyMutationInput>;

    @Field(() => PokemonEvolutionWhereInput, {nullable:true})
    @Type(() => PokemonEvolutionWhereInput)
    where?: Identity<PokemonEvolutionWhereInput>;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
