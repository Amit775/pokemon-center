import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonEvolutionUncheckedUpdateManyWithoutEvolutionTriggerNestedInput } from '../pokemon-evolution/pokemon-evolution-unchecked-update-many-without-evolution-trigger-nested.input';

@InputType()
export class EvolutionTriggersUncheckedUpdateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => PokemonEvolutionUncheckedUpdateManyWithoutEvolutionTriggerNestedInput, {nullable:true})
    evolution?: Identity<PokemonEvolutionUncheckedUpdateManyWithoutEvolutionTriggerNestedInput>;
}
