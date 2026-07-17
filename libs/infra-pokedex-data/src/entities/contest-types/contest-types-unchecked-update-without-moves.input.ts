import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { BerryFlavorsUncheckedUpdateManyWithoutContestTypeNestedInput } from '../berry-flavors/berry-flavors-unchecked-update-many-without-contest-type-nested.input';

@InputType()
export class ContestTypesUncheckedUpdateWithoutMovesInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => BerryFlavorsUncheckedUpdateManyWithoutContestTypeNestedInput, {nullable:true})
    berryFlavors?: BerryFlavorsUncheckedUpdateManyWithoutContestTypeNestedInput;
}
