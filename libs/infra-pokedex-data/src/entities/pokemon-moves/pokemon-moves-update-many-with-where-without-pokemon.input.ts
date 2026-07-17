import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonMovesScalarWhereInput } from './pokemon-moves-scalar-where.input';
import { Type } from 'class-transformer';
import { PokemonMovesUpdateManyMutationInput } from './pokemon-moves-update-many-mutation.input';

@InputType()
export class PokemonMovesUpdateManyWithWhereWithoutPokemonInput {

    @Field(() => PokemonMovesScalarWhereInput, {nullable:false})
    @Type(() => PokemonMovesScalarWhereInput)
    where!: PokemonMovesScalarWhereInput;

    @Field(() => PokemonMovesUpdateManyMutationInput, {nullable:false})
    @Type(() => PokemonMovesUpdateManyMutationInput)
    data!: PokemonMovesUpdateManyMutationInput;
}
