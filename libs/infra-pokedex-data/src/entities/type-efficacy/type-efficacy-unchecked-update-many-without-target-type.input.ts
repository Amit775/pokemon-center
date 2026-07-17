import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';

@InputType()
export class TypeEfficacyUncheckedUpdateManyWithoutTargetTypeInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    damage_type_id?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    damage_factor?: IntFieldUpdateOperationsInput;
}
