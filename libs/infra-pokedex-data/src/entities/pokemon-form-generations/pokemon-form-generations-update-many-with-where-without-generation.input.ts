import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonFormGenerationsScalarWhereInput } from './pokemon-form-generations-scalar-where.input';
import { Type } from 'class-transformer';
import { PokemonFormGenerationsUpdateManyMutationInput } from './pokemon-form-generations-update-many-mutation.input';

@InputType()
export class PokemonFormGenerationsUpdateManyWithWhereWithoutGenerationInput {

    @Field(() => PokemonFormGenerationsScalarWhereInput, {nullable:false})
    @Type(() => PokemonFormGenerationsScalarWhereInput)
    where!: PokemonFormGenerationsScalarWhereInput;

    @Field(() => PokemonFormGenerationsUpdateManyMutationInput, {nullable:false})
    @Type(() => PokemonFormGenerationsUpdateManyMutationInput)
    data!: PokemonFormGenerationsUpdateManyMutationInput;
}
