import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonMovesScalarWhereInput } from './pokemon-moves-scalar-where.input';
import { Type } from 'class-transformer';
import { PokemonMovesUpdateManyMutationInput } from './pokemon-moves-update-many-mutation.input';

@InputType()
export class PokemonMovesUpdateManyWithWhereWithoutMoveMethodInput {

    @Field(() => PokemonMovesScalarWhereInput, {nullable:false})
    @Type(() => PokemonMovesScalarWhereInput)
    where!: Identity<PokemonMovesScalarWhereInput>;

    @Field(() => PokemonMovesUpdateManyMutationInput, {nullable:false})
    @Type(() => PokemonMovesUpdateManyMutationInput)
    data!: Identity<PokemonMovesUpdateManyMutationInput>;
}
