import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonTypesScalarWhereInput } from './pokemon-types-scalar-where.input';
import { Type } from 'class-transformer';
import { PokemonTypesUpdateManyMutationInput } from './pokemon-types-update-many-mutation.input';

@InputType()
export class PokemonTypesUpdateManyWithWhereWithoutTypeInput {

    @Field(() => PokemonTypesScalarWhereInput, {nullable:false})
    @Type(() => PokemonTypesScalarWhereInput)
    where!: Identity<PokemonTypesScalarWhereInput>;

    @Field(() => PokemonTypesUpdateManyMutationInput, {nullable:false})
    @Type(() => PokemonTypesUpdateManyMutationInput)
    data!: Identity<PokemonTypesUpdateManyMutationInput>;
}
