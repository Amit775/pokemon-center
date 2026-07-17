import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StatsUpdateOneRequiredWithoutPokemonStatsNestedInput } from '../stats/stats-update-one-required-without-pokemon-stats-nested.input';

@InputType()
export class PokemonStatsUpdateWithoutPokemonInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    base_stat?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    effort?: IntFieldUpdateOperationsInput;

    @Field(() => StatsUpdateOneRequiredWithoutPokemonStatsNestedInput, {nullable:true})
    stat?: StatsUpdateOneRequiredWithoutPokemonStatsNestedInput;
}
