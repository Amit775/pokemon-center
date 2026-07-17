import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { PokemonUpdateOneRequiredWithoutStatsNestedInput } from '../pokemon/pokemon-update-one-required-without-stats-nested.input';
import { StatsUpdateOneRequiredWithoutPokemonStatsNestedInput } from '../stats/stats-update-one-required-without-pokemon-stats-nested.input';

@InputType()
export class PokemonStatsUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    base_stat?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    effort?: IntFieldUpdateOperationsInput;

    @Field(() => PokemonUpdateOneRequiredWithoutStatsNestedInput, {nullable:true})
    pokemon?: PokemonUpdateOneRequiredWithoutStatsNestedInput;

    @Field(() => StatsUpdateOneRequiredWithoutPokemonStatsNestedInput, {nullable:true})
    stat?: StatsUpdateOneRequiredWithoutPokemonStatsNestedInput;
}
