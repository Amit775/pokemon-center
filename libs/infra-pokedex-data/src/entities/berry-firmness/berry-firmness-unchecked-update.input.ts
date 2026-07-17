import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { BerriesUncheckedUpdateManyWithoutFirmnessNestedInput } from '../berries/berries-unchecked-update-many-without-firmness-nested.input';

@InputType()
export class BerryFirmnessUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => BerriesUncheckedUpdateManyWithoutFirmnessNestedInput, {nullable:true})
    berries?: BerriesUncheckedUpdateManyWithoutFirmnessNestedInput;
}
