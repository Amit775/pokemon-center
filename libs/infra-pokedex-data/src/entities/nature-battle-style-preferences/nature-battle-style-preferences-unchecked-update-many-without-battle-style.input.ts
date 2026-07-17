import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';

@InputType()
export class NatureBattleStylePreferencesUncheckedUpdateManyWithoutBattleStyleInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    nature_id?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    low_hp_preference?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    high_hp_preference?: IntFieldUpdateOperationsInput;
}
