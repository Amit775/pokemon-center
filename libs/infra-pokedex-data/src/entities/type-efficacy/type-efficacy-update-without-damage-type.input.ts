import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { TypesUpdateOneRequiredWithoutEfficacyTargetNestedInput } from '../types/types-update-one-required-without-efficacy-target-nested.input';

@InputType()
export class TypeEfficacyUpdateWithoutDamageTypeInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    damage_factor?: IntFieldUpdateOperationsInput;

    @Field(() => TypesUpdateOneRequiredWithoutEfficacyTargetNestedInput, {nullable:true})
    targetType?: TypesUpdateOneRequiredWithoutEfficacyTargetNestedInput;
}
