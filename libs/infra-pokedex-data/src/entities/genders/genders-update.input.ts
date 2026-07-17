import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonEvolutionUpdateManyWithoutGenderNestedInput } from '../pokemon-evolution/pokemon-evolution-update-many-without-gender-nested.input';

@InputType()
export class GendersUpdateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => PokemonEvolutionUpdateManyWithoutGenderNestedInput, {nullable:true})
    evolution?: Identity<PokemonEvolutionUpdateManyWithoutGenderNestedInput>;
}
