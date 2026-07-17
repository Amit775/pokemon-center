import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { ItemsUpdateOneRequiredWithoutBerriesNestedInput } from '../items/items-update-one-required-without-berries-nested.input';
import { BerryFirmnessUpdateOneRequiredWithoutBerriesNestedInput } from '../berry-firmness/berry-firmness-update-one-required-without-berries-nested.input';
import { BerryFlavorsUpdateManyWithoutBerryNestedInput } from '../berry-flavors/berry-flavors-update-many-without-berry-nested.input';

@InputType()
export class BerriesUpdateWithoutNaturalGiftTypeInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    natural_gift_power?: NullableIntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    size?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    max_harvest?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    growth_time?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    soil_dryness?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    smoothness?: IntFieldUpdateOperationsInput;

    @Field(() => ItemsUpdateOneRequiredWithoutBerriesNestedInput, {nullable:true})
    item?: ItemsUpdateOneRequiredWithoutBerriesNestedInput;

    @Field(() => BerryFirmnessUpdateOneRequiredWithoutBerriesNestedInput, {nullable:true})
    firmness?: BerryFirmnessUpdateOneRequiredWithoutBerriesNestedInput;

    @Field(() => BerryFlavorsUpdateManyWithoutBerryNestedInput, {nullable:true})
    flavors?: BerryFlavorsUpdateManyWithoutBerryNestedInput;
}
