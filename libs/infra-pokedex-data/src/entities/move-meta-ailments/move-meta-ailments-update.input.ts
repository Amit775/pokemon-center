import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MoveMetaUpdateManyWithoutMetaAilmentNestedInput } from '../move-meta/move-meta-update-many-without-meta-ailment-nested.input';

@InputType()
export class MoveMetaAilmentsUpdateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => MoveMetaUpdateManyWithoutMetaAilmentNestedInput, {nullable:true})
    meta?: Identity<MoveMetaUpdateManyWithoutMetaAilmentNestedInput>;
}
