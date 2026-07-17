import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { TypesUpdateOneRequiredWithoutEfficacyNestedInput } from '../types/types-update-one-required-without-efficacy-nested.input';
import { TypesUpdateOneRequiredWithoutEfficacyTargetNestedInput } from '../types/types-update-one-required-without-efficacy-target-nested.input';

@InputType()
export class TypeEfficacyUpdateInput {

    @Field(() => Int, {nullable:true})
    damage_factor?: number;

    @Field(() => TypesUpdateOneRequiredWithoutEfficacyNestedInput, {nullable:true})
    damageType?: Identity<TypesUpdateOneRequiredWithoutEfficacyNestedInput>;

    @Field(() => TypesUpdateOneRequiredWithoutEfficacyTargetNestedInput, {nullable:true})
    targetType?: Identity<TypesUpdateOneRequiredWithoutEfficacyTargetNestedInput>;
}
