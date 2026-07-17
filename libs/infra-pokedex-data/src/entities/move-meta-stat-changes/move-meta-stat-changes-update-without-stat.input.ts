import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MoveMetaUpdateOneRequiredWithoutStatChangesNestedInput } from '../move-meta/move-meta-update-one-required-without-stat-changes-nested.input';

@InputType()
export class MoveMetaStatChangesUpdateWithoutStatInput {

    @Field(() => Int, {nullable:true})
    change?: number;

    @Field(() => MoveMetaUpdateOneRequiredWithoutStatChangesNestedInput, {nullable:true})
    meta?: Identity<MoveMetaUpdateOneRequiredWithoutStatChangesNestedInput>;
}
