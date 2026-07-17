import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { GrowthRatesUpdateOneRequiredWithoutExperienceNestedInput } from '../growth-rates/growth-rates-update-one-required-without-experience-nested.input';

@InputType()
export class ExperienceUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    level?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    experience?: IntFieldUpdateOperationsInput;

    @Field(() => GrowthRatesUpdateOneRequiredWithoutExperienceNestedInput, {nullable:true})
    growthRate?: GrowthRatesUpdateOneRequiredWithoutExperienceNestedInput;
}
