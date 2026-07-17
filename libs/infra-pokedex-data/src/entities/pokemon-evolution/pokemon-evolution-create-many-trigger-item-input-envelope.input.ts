import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonEvolutionCreateManyTriggerItemInput } from './pokemon-evolution-create-many-trigger-item.input';
import { Type } from 'class-transformer';

@InputType()
export class PokemonEvolutionCreateManyTriggerItemInputEnvelope {

    @Field(() => [PokemonEvolutionCreateManyTriggerItemInput], {nullable:false})
    @Type(() => PokemonEvolutionCreateManyTriggerItemInput)
    data!: Array<PokemonEvolutionCreateManyTriggerItemInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
