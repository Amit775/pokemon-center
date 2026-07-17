import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PokemonEvolutionCreateNestedManyWithoutGenderInput } from '../pokemon-evolution/pokemon-evolution-create-nested-many-without-gender.input';

@InputType()
export class GendersCreateInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => PokemonEvolutionCreateNestedManyWithoutGenderInput, {nullable:true})
    evolution?: PokemonEvolutionCreateNestedManyWithoutGenderInput;
}
