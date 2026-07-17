import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MoveMetaUncheckedCreateNestedManyWithoutMetaAilmentInput } from '../move-meta/move-meta-unchecked-create-nested-many-without-meta-ailment.input';

@InputType()
export class MoveMetaAilmentsUncheckedCreateInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => MoveMetaUncheckedCreateNestedManyWithoutMetaAilmentInput, {nullable:true})
    meta?: Identity<MoveMetaUncheckedCreateNestedManyWithoutMetaAilmentInput>;
}
