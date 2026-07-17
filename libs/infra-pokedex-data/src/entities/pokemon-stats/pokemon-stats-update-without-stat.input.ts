import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonUpdateOneRequiredWithoutStatsNestedInput } from '../pokemon/pokemon-update-one-required-without-stats-nested.input';

@InputType()
export class PokemonStatsUpdateWithoutStatInput {

    @Field(() => Int, {nullable:true})
    base_stat?: number;

    @Field(() => Int, {nullable:true})
    effort?: number;

    @Field(() => PokemonUpdateOneRequiredWithoutStatsNestedInput, {nullable:true})
    pokemon?: Identity<PokemonUpdateOneRequiredWithoutStatsNestedInput>;
}
