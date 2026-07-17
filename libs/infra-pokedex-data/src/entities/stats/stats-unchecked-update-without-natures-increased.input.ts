import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { PokemonStatsUncheckedUpdateManyWithoutStatNestedInput } from '../pokemon-stats/pokemon-stats-unchecked-update-many-without-stat-nested.input';
import { MoveMetaStatChangesUncheckedUpdateManyWithoutStatNestedInput } from '../move-meta-stat-changes/move-meta-stat-changes-unchecked-update-many-without-stat-nested.input';
import { CharacteristicsUncheckedUpdateManyWithoutStatNestedInput } from '../characteristics/characteristics-unchecked-update-many-without-stat-nested.input';
import { NaturesUncheckedUpdateManyWithoutDecreasedStatNestedInput } from '../natures/natures-unchecked-update-many-without-decreased-stat-nested.input';

@InputType()
export class StatsUncheckedUpdateWithoutNaturesIncreasedInput {

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

    @Field(() => PokemonStatsUncheckedUpdateManyWithoutStatNestedInput, {nullable:true})
    pokemonStats?: PokemonStatsUncheckedUpdateManyWithoutStatNestedInput;

    @Field(() => MoveMetaStatChangesUncheckedUpdateManyWithoutStatNestedInput, {nullable:true})
    moveMetaStatChanges?: MoveMetaStatChangesUncheckedUpdateManyWithoutStatNestedInput;

    @Field(() => CharacteristicsUncheckedUpdateManyWithoutStatNestedInput, {nullable:true})
    characteristics?: CharacteristicsUncheckedUpdateManyWithoutStatNestedInput;

    @Field(() => NaturesUncheckedUpdateManyWithoutDecreasedStatNestedInput, {nullable:true})
    naturesDecreased?: NaturesUncheckedUpdateManyWithoutDecreasedStatNestedInput;
}
