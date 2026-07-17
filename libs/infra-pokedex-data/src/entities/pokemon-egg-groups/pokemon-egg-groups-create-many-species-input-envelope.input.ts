import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonEggGroupsCreateManySpeciesInput } from './pokemon-egg-groups-create-many-species.input';
import { Type } from 'class-transformer';

@InputType()
export class PokemonEggGroupsCreateManySpeciesInputEnvelope {

    @Field(() => [PokemonEggGroupsCreateManySpeciesInput], {nullable:false})
    @Type(() => PokemonEggGroupsCreateManySpeciesInput)
    data!: Array<PokemonEggGroupsCreateManySpeciesInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
