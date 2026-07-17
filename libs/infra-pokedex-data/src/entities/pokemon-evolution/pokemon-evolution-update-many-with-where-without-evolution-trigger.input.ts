import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonEvolutionScalarWhereInput } from './pokemon-evolution-scalar-where.input';
import { Type } from 'class-transformer';
import { PokemonEvolutionUpdateManyMutationInput } from './pokemon-evolution-update-many-mutation.input';

@InputType()
export class PokemonEvolutionUpdateManyWithWhereWithoutEvolutionTriggerInput {

    @Field(() => PokemonEvolutionScalarWhereInput, {nullable:false})
    @Type(() => PokemonEvolutionScalarWhereInput)
    where!: PokemonEvolutionScalarWhereInput;

    @Field(() => PokemonEvolutionUpdateManyMutationInput, {nullable:false})
    @Type(() => PokemonEvolutionUpdateManyMutationInput)
    data!: PokemonEvolutionUpdateManyMutationInput;
}
