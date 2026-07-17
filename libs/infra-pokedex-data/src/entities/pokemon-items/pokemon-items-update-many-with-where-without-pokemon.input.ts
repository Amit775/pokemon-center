import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonItemsScalarWhereInput } from './pokemon-items-scalar-where.input';
import { Type } from 'class-transformer';
import { PokemonItemsUpdateManyMutationInput } from './pokemon-items-update-many-mutation.input';

@InputType()
export class PokemonItemsUpdateManyWithWhereWithoutPokemonInput {

    @Field(() => PokemonItemsScalarWhereInput, {nullable:false})
    @Type(() => PokemonItemsScalarWhereInput)
    where!: Identity<PokemonItemsScalarWhereInput>;

    @Field(() => PokemonItemsUpdateManyMutationInput, {nullable:false})
    @Type(() => PokemonItemsUpdateManyMutationInput)
    data!: Identity<PokemonItemsUpdateManyMutationInput>;
}
