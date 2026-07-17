import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { MoveMetaStatChangesUncheckedUpdateManyWithoutStatNestedInput } from '../move-meta-stat-changes/move-meta-stat-changes-unchecked-update-many-without-stat-nested.input';
import { CharacteristicsUncheckedUpdateManyWithoutStatNestedInput } from '../characteristics/characteristics-unchecked-update-many-without-stat-nested.input';
import { NaturesUncheckedUpdateManyWithoutDecreasedStatNestedInput } from '../natures/natures-unchecked-update-many-without-decreased-stat-nested.input';
import { NaturesUncheckedUpdateManyWithoutIncreasedStatNestedInput } from '../natures/natures-unchecked-update-many-without-increased-stat-nested.input';

@InputType()
export class StatsUncheckedUpdateWithoutPokemonStatsInput {

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

    @Field(() => MoveMetaStatChangesUncheckedUpdateManyWithoutStatNestedInput, {nullable:true})
    moveMetaStatChanges?: MoveMetaStatChangesUncheckedUpdateManyWithoutStatNestedInput;

    @Field(() => CharacteristicsUncheckedUpdateManyWithoutStatNestedInput, {nullable:true})
    characteristics?: CharacteristicsUncheckedUpdateManyWithoutStatNestedInput;

    @Field(() => NaturesUncheckedUpdateManyWithoutDecreasedStatNestedInput, {nullable:true})
    naturesDecreased?: NaturesUncheckedUpdateManyWithoutDecreasedStatNestedInput;

    @Field(() => NaturesUncheckedUpdateManyWithoutIncreasedStatNestedInput, {nullable:true})
    naturesIncreased?: NaturesUncheckedUpdateManyWithoutIncreasedStatNestedInput;
}
