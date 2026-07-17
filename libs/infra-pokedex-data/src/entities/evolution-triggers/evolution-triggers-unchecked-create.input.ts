import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonEvolutionUncheckedCreateNestedManyWithoutEvolutionTriggerInput } from '../pokemon-evolution/pokemon-evolution-unchecked-create-nested-many-without-evolution-trigger.input';

@InputType()
export class EvolutionTriggersUncheckedCreateInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => PokemonEvolutionUncheckedCreateNestedManyWithoutEvolutionTriggerInput, {nullable:true})
    evolution?: Identity<PokemonEvolutionUncheckedCreateNestedManyWithoutEvolutionTriggerInput>;
}
