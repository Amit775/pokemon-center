import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { MovesUpdateManyWithoutContestTypeNestedInput } from '../moves/moves-update-many-without-contest-type-nested.input';

@InputType()
export class ContestTypesUpdateWithoutBerryFlavorsInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    identifier?: StringFieldUpdateOperationsInput;

    @Field(() => MovesUpdateManyWithoutContestTypeNestedInput, {nullable:true})
    moves?: MovesUpdateManyWithoutContestTypeNestedInput;
}
