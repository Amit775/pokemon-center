import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { BerriesUpdateManyWithoutFirmnessNestedInput } from '../berries/berries-update-many-without-firmness-nested.input';

@InputType()
export class BerryFirmnessUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => BerriesUpdateManyWithoutFirmnessNestedInput, {nullable:true})
    berries?: BerriesUpdateManyWithoutFirmnessNestedInput;
}
