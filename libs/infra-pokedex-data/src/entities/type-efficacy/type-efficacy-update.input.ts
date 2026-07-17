import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { TypesUpdateOneRequiredWithoutEfficacyNestedInput } from '../types/types-update-one-required-without-efficacy-nested.input';
import { TypesUpdateOneRequiredWithoutEfficacyTargetNestedInput } from '../types/types-update-one-required-without-efficacy-target-nested.input';

@InputType()
export class TypeEfficacyUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    damage_factor?: IntFieldUpdateOperationsInput;

    @Field(() => TypesUpdateOneRequiredWithoutEfficacyNestedInput, {nullable:true})
    damageType?: TypesUpdateOneRequiredWithoutEfficacyNestedInput;

    @Field(() => TypesUpdateOneRequiredWithoutEfficacyTargetNestedInput, {nullable:true})
    targetType?: TypesUpdateOneRequiredWithoutEfficacyTargetNestedInput;
}
