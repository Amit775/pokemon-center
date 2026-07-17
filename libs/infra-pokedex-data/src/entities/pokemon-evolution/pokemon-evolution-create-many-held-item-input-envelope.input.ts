import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonEvolutionCreateManyHeldItemInput } from './pokemon-evolution-create-many-held-item.input';
import { Type } from 'class-transformer';

@InputType()
export class PokemonEvolutionCreateManyHeldItemInputEnvelope {

    @Field(() => [PokemonEvolutionCreateManyHeldItemInput], {nullable:false})
    @Type(() => PokemonEvolutionCreateManyHeldItemInput)
    data!: Array<PokemonEvolutionCreateManyHeldItemInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
