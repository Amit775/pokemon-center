import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonEvolutionCreateManyKnownMoveTypeInput } from './pokemon-evolution-create-many-known-move-type.input';
import { Type } from 'class-transformer';

@InputType()
export class PokemonEvolutionCreateManyKnownMoveTypeInputEnvelope {

    @Field(() => [PokemonEvolutionCreateManyKnownMoveTypeInput], {nullable:false})
    @Type(() => PokemonEvolutionCreateManyKnownMoveTypeInput)
    data!: Array<PokemonEvolutionCreateManyKnownMoveTypeInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
