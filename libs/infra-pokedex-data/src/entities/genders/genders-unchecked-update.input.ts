import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonEvolutionUncheckedUpdateManyWithoutGenderNestedInput } from '../pokemon-evolution/pokemon-evolution-unchecked-update-many-without-gender-nested.input';

@InputType()
export class GendersUncheckedUpdateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => PokemonEvolutionUncheckedUpdateManyWithoutGenderNestedInput, {nullable:true})
    evolution?: Identity<PokemonEvolutionUncheckedUpdateManyWithoutGenderNestedInput>;
}
