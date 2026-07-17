import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { PokemonUpdateOneRequiredWithoutStatsNestedInput } from '../pokemon/pokemon-update-one-required-without-stats-nested.input';

@InputType()
export class PokemonStatsUpdateWithoutStatInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    base_stat?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    effort?: IntFieldUpdateOperationsInput;

    @Field(() => PokemonUpdateOneRequiredWithoutStatsNestedInput, {nullable:true})
    pokemon?: PokemonUpdateOneRequiredWithoutStatsNestedInput;
}
