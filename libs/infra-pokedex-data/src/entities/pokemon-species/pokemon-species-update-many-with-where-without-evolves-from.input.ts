import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonSpeciesScalarWhereInput } from './pokemon-species-scalar-where.input';
import { Type } from 'class-transformer';
import { PokemonSpeciesUpdateManyMutationInput } from './pokemon-species-update-many-mutation.input';

@InputType()
export class PokemonSpeciesUpdateManyWithWhereWithoutEvolvesFromInput {

    @Field(() => PokemonSpeciesScalarWhereInput, {nullable:false})
    @Type(() => PokemonSpeciesScalarWhereInput)
    where!: PokemonSpeciesScalarWhereInput;

    @Field(() => PokemonSpeciesUpdateManyMutationInput, {nullable:false})
    @Type(() => PokemonSpeciesUpdateManyMutationInput)
    data!: PokemonSpeciesUpdateManyMutationInput;
}
