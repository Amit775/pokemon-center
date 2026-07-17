import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';

@InputType()
export class ExperienceUpdateWithoutGrowthRateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    level?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    experience?: IntFieldUpdateOperationsInput;
}
