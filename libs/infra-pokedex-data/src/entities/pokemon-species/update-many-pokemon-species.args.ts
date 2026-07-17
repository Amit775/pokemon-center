import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PokemonSpeciesUpdateManyMutationInput } from './pokemon-species-update-many-mutation.input';
import { Type } from 'class-transformer';
import { PokemonSpeciesWhereInput } from './pokemon-species-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyPokemonSpeciesArgs {

    @Field(() => PokemonSpeciesUpdateManyMutationInput, {nullable:false})
    @Type(() => PokemonSpeciesUpdateManyMutationInput)
    data!: PokemonSpeciesUpdateManyMutationInput;

    @Field(() => PokemonSpeciesWhereInput, {nullable:true})
    @Type(() => PokemonSpeciesWhereInput)
    where?: PokemonSpeciesWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
