import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonSpeciesWhereInput } from './pokemon-species-where.input';
import { Type } from 'class-transformer';
import { PokemonSpeciesUpdateWithoutPartySpeciesInput } from './pokemon-species-update-without-party-species.input';

@InputType()
export class PokemonSpeciesUpdateToOneWithWhereWithoutPartySpeciesInput {

    @Field(() => PokemonSpeciesWhereInput, {nullable:true})
    @Type(() => PokemonSpeciesWhereInput)
    where?: PokemonSpeciesWhereInput;

    @Field(() => PokemonSpeciesUpdateWithoutPartySpeciesInput, {nullable:false})
    @Type(() => PokemonSpeciesUpdateWithoutPartySpeciesInput)
    data!: PokemonSpeciesUpdateWithoutPartySpeciesInput;
}
