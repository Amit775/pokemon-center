import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonFormTypesScalarWhereInput } from './pokemon-form-types-scalar-where.input';
import { Type } from 'class-transformer';
import { PokemonFormTypesUpdateManyMutationInput } from './pokemon-form-types-update-many-mutation.input';

@InputType()
export class PokemonFormTypesUpdateManyWithWhereWithoutTypeInput {

    @Field(() => PokemonFormTypesScalarWhereInput, {nullable:false})
    @Type(() => PokemonFormTypesScalarWhereInput)
    where!: PokemonFormTypesScalarWhereInput;

    @Field(() => PokemonFormTypesUpdateManyMutationInput, {nullable:false})
    @Type(() => PokemonFormTypesUpdateManyMutationInput)
    data!: PokemonFormTypesUpdateManyMutationInput;
}
