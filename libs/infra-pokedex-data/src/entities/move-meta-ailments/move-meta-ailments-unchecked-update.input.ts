import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MoveMetaUncheckedUpdateManyWithoutMetaAilmentNestedInput } from '../move-meta/move-meta-unchecked-update-many-without-meta-ailment-nested.input';

@InputType()
export class MoveMetaAilmentsUncheckedUpdateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => MoveMetaUncheckedUpdateManyWithoutMetaAilmentNestedInput, {nullable:true})
    meta?: Identity<MoveMetaUncheckedUpdateManyWithoutMetaAilmentNestedInput>;
}
