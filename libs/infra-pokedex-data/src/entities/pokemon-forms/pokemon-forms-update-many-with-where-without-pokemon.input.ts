import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonFormsScalarWhereInput } from './pokemon-forms-scalar-where.input';
import { Type } from 'class-transformer';
import { PokemonFormsUpdateManyMutationInput } from './pokemon-forms-update-many-mutation.input';

@InputType()
export class PokemonFormsUpdateManyWithWhereWithoutPokemonInput {

    @Field(() => PokemonFormsScalarWhereInput, {nullable:false})
    @Type(() => PokemonFormsScalarWhereInput)
    where!: PokemonFormsScalarWhereInput;

    @Field(() => PokemonFormsUpdateManyMutationInput, {nullable:false})
    @Type(() => PokemonFormsUpdateManyMutationInput)
    data!: PokemonFormsUpdateManyMutationInput;
}
