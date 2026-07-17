import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';

@InputType()
export class PokedexVersionGroupsUncheckedUpdateManyWithoutPokedexInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    version_group_id?: IntFieldUpdateOperationsInput;
}
