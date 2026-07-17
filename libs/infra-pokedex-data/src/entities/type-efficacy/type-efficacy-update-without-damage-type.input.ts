import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { TypesUpdateOneRequiredWithoutEfficacyTargetNestedInput } from '../types/types-update-one-required-without-efficacy-target-nested.input';

@InputType()
export class TypeEfficacyUpdateWithoutDamageTypeInput {

    @Field(() => Int, {nullable:true})
    damage_factor?: number;

    @Field(() => TypesUpdateOneRequiredWithoutEfficacyTargetNestedInput, {nullable:true})
    targetType?: Identity<TypesUpdateOneRequiredWithoutEfficacyTargetNestedInput>;
}
