import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonAbilitiesScalarWhereInput } from './pokemon-abilities-scalar-where.input';
import { Type } from 'class-transformer';
import { PokemonAbilitiesUpdateManyMutationInput } from './pokemon-abilities-update-many-mutation.input';

@InputType()
export class PokemonAbilitiesUpdateManyWithWhereWithoutAbilityInput {

    @Field(() => PokemonAbilitiesScalarWhereInput, {nullable:false})
    @Type(() => PokemonAbilitiesScalarWhereInput)
    where!: PokemonAbilitiesScalarWhereInput;

    @Field(() => PokemonAbilitiesUpdateManyMutationInput, {nullable:false})
    @Type(() => PokemonAbilitiesUpdateManyMutationInput)
    data!: PokemonAbilitiesUpdateManyMutationInput;
}
