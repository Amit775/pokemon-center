import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonEvolutionCreateManyEvolutionTriggerInput } from './pokemon-evolution-create-many-evolution-trigger.input';
import { Type } from 'class-transformer';

@InputType()
export class PokemonEvolutionCreateManyEvolutionTriggerInputEnvelope {

    @Field(() => [PokemonEvolutionCreateManyEvolutionTriggerInput], {nullable:false})
    @Type(() => PokemonEvolutionCreateManyEvolutionTriggerInput)
    data!: Array<PokemonEvolutionCreateManyEvolutionTriggerInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
