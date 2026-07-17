import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { MovesUncheckedUpdateManyWithoutContestTypeNestedInput } from '../moves/moves-unchecked-update-many-without-contest-type-nested.input';

@InputType()
export class ContestTypesUncheckedUpdateWithoutBerryFlavorsInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => MovesUncheckedUpdateManyWithoutContestTypeNestedInput, {nullable:true})
    moves?: MovesUncheckedUpdateManyWithoutContestTypeNestedInput;
}
