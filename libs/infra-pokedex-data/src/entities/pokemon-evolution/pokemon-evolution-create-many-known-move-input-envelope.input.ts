import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonEvolutionCreateManyKnownMoveInput } from './pokemon-evolution-create-many-known-move.input';
import { Type } from 'class-transformer';

@InputType()
export class PokemonEvolutionCreateManyKnownMoveInputEnvelope {

    @Field(() => [PokemonEvolutionCreateManyKnownMoveInput], {nullable:false})
    @Type(() => PokemonEvolutionCreateManyKnownMoveInput)
    data!: Array<PokemonEvolutionCreateManyKnownMoveInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
