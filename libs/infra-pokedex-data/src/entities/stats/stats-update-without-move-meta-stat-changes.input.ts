import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { PokemonStatsUpdateManyWithoutStatNestedInput } from '../pokemon-stats/pokemon-stats-update-many-without-stat-nested.input';
import { CharacteristicsUpdateManyWithoutStatNestedInput } from '../characteristics/characteristics-update-many-without-stat-nested.input';
import { NaturesUpdateManyWithoutDecreasedStatNestedInput } from '../natures/natures-update-many-without-decreased-stat-nested.input';
import { NaturesUpdateManyWithoutIncreasedStatNestedInput } from '../natures/natures-update-many-without-increased-stat-nested.input';

@InputType()
export class StatsUpdateWithoutMoveMetaStatChangesInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    damage_class_id?: NullableIntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    is_battle_only?: IntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    game_index?: NullableIntFieldUpdateOperationsInput;

    @Field(() => PokemonStatsUpdateManyWithoutStatNestedInput, {nullable:true})
    pokemonStats?: PokemonStatsUpdateManyWithoutStatNestedInput;

    @Field(() => CharacteristicsUpdateManyWithoutStatNestedInput, {nullable:true})
    characteristics?: CharacteristicsUpdateManyWithoutStatNestedInput;

    @Field(() => NaturesUpdateManyWithoutDecreasedStatNestedInput, {nullable:true})
    naturesDecreased?: NaturesUpdateManyWithoutDecreasedStatNestedInput;

    @Field(() => NaturesUpdateManyWithoutIncreasedStatNestedInput, {nullable:true})
    naturesIncreased?: NaturesUpdateManyWithoutIncreasedStatNestedInput;
}
