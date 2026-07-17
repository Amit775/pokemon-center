import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonItemsScalarWhereInput } from './pokemon-items-scalar-where.input';
import { Type } from 'class-transformer';
import { PokemonItemsUpdateManyMutationInput } from './pokemon-items-update-many-mutation.input';

@InputType()
export class PokemonItemsUpdateManyWithWhereWithoutVersionInput {

    @Field(() => PokemonItemsScalarWhereInput, {nullable:false})
    @Type(() => PokemonItemsScalarWhereInput)
    where!: PokemonItemsScalarWhereInput;

    @Field(() => PokemonItemsUpdateManyMutationInput, {nullable:false})
    @Type(() => PokemonItemsUpdateManyMutationInput)
    data!: PokemonItemsUpdateManyMutationInput;
}
