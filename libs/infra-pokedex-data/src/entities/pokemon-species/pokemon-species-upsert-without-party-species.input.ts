import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonSpeciesUpdateWithoutPartySpeciesInput } from './pokemon-species-update-without-party-species.input';
import { Type } from 'class-transformer';
import { PokemonSpeciesCreateWithoutPartySpeciesInput } from './pokemon-species-create-without-party-species.input';
import { PokemonSpeciesWhereInput } from './pokemon-species-where.input';

@InputType()
export class PokemonSpeciesUpsertWithoutPartySpeciesInput {

    @Field(() => PokemonSpeciesUpdateWithoutPartySpeciesInput, {nullable:false})
    @Type(() => PokemonSpeciesUpdateWithoutPartySpeciesInput)
    update!: PokemonSpeciesUpdateWithoutPartySpeciesInput;

    @Field(() => PokemonSpeciesCreateWithoutPartySpeciesInput, {nullable:false})
    @Type(() => PokemonSpeciesCreateWithoutPartySpeciesInput)
    create!: PokemonSpeciesCreateWithoutPartySpeciesInput;

    @Field(() => PokemonSpeciesWhereInput, {nullable:true})
    @Type(() => PokemonSpeciesWhereInput)
    where?: PokemonSpeciesWhereInput;
}
