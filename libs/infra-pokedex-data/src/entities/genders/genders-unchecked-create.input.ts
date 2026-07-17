import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PokemonEvolutionUncheckedCreateNestedManyWithoutGenderInput } from '../pokemon-evolution/pokemon-evolution-unchecked-create-nested-many-without-gender.input';

@InputType()
export class GendersUncheckedCreateInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => PokemonEvolutionUncheckedCreateNestedManyWithoutGenderInput, {nullable:true})
    evolution?: PokemonEvolutionUncheckedCreateNestedManyWithoutGenderInput;
}
