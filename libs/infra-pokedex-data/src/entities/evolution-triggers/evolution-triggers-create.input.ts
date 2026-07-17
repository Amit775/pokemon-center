import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PokemonEvolutionCreateNestedManyWithoutEvolutionTriggerInput } from '../pokemon-evolution/pokemon-evolution-create-nested-many-without-evolution-trigger.input';

@InputType()
export class EvolutionTriggersCreateInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => PokemonEvolutionCreateNestedManyWithoutEvolutionTriggerInput, {nullable:true})
    evolution?: PokemonEvolutionCreateNestedManyWithoutEvolutionTriggerInput;
}
