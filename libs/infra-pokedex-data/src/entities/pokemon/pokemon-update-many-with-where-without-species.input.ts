import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonScalarWhereInput } from './pokemon-scalar-where.input';
import { Type } from 'class-transformer';
import { PokemonUpdateManyMutationInput } from './pokemon-update-many-mutation.input';

@InputType()
export class PokemonUpdateManyWithWhereWithoutSpeciesInput {

    @Field(() => PokemonScalarWhereInput, {nullable:false})
    @Type(() => PokemonScalarWhereInput)
    where!: PokemonScalarWhereInput;

    @Field(() => PokemonUpdateManyMutationInput, {nullable:false})
    @Type(() => PokemonUpdateManyMutationInput)
    data!: PokemonUpdateManyMutationInput;
}
