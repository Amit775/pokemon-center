import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonFormTypesScalarWhereInput } from './pokemon-form-types-scalar-where.input';
import { Type } from 'class-transformer';
import { PokemonFormTypesUpdateManyMutationInput } from './pokemon-form-types-update-many-mutation.input';

@InputType()
export class PokemonFormTypesUpdateManyWithWhereWithoutPokemonFormInput {

    @Field(() => PokemonFormTypesScalarWhereInput, {nullable:false})
    @Type(() => PokemonFormTypesScalarWhereInput)
    where!: Identity<PokemonFormTypesScalarWhereInput>;

    @Field(() => PokemonFormTypesUpdateManyMutationInput, {nullable:false})
    @Type(() => PokemonFormTypesUpdateManyMutationInput)
    data!: Identity<PokemonFormTypesUpdateManyMutationInput>;
}
