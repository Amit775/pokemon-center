import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonEvolutionUpdateManyWithoutEvolutionTriggerNestedInput } from '../pokemon-evolution/pokemon-evolution-update-many-without-evolution-trigger-nested.input';

@InputType()
export class EvolutionTriggersUpdateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => PokemonEvolutionUpdateManyWithoutEvolutionTriggerNestedInput, {nullable:true})
    evolution?: Identity<PokemonEvolutionUpdateManyWithoutEvolutionTriggerNestedInput>;
}
