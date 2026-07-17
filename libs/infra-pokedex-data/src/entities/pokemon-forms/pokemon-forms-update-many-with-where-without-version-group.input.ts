import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonFormsScalarWhereInput } from './pokemon-forms-scalar-where.input';
import { Type } from 'class-transformer';
import { PokemonFormsUpdateManyMutationInput } from './pokemon-forms-update-many-mutation.input';

@InputType()
export class PokemonFormsUpdateManyWithWhereWithoutVersionGroupInput {

    @Field(() => PokemonFormsScalarWhereInput, {nullable:false})
    @Type(() => PokemonFormsScalarWhereInput)
    where!: Identity<PokemonFormsScalarWhereInput>;

    @Field(() => PokemonFormsUpdateManyMutationInput, {nullable:false})
    @Type(() => PokemonFormsUpdateManyMutationInput)
    data!: Identity<PokemonFormsUpdateManyMutationInput>;
}
