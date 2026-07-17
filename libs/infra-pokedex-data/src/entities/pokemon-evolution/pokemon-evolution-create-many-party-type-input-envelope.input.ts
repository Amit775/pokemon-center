import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonEvolutionCreateManyPartyTypeInput } from './pokemon-evolution-create-many-party-type.input';
import { Type } from 'class-transformer';

@InputType()
export class PokemonEvolutionCreateManyPartyTypeInputEnvelope {

    @Field(() => [PokemonEvolutionCreateManyPartyTypeInput], {nullable:false})
    @Type(() => PokemonEvolutionCreateManyPartyTypeInput)
    data!: Array<PokemonEvolutionCreateManyPartyTypeInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
