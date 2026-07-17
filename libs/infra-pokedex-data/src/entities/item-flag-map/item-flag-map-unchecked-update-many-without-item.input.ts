import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';

@InputType()
export class ItemFlagMapUncheckedUpdateManyWithoutItemInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    item_flag_id?: IntFieldUpdateOperationsInput;
}
