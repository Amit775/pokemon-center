import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { ItemsUpdateOneWithoutBabyTriggerItemsNestedInput } from '../items/items-update-one-without-baby-trigger-items-nested.input';

@InputType()
export class EvolutionChainsUpdateWithoutSpeciesInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => ItemsUpdateOneWithoutBabyTriggerItemsNestedInput, {nullable:true})
    babyTriggerItem?: ItemsUpdateOneWithoutBabyTriggerItemsNestedInput;
}
