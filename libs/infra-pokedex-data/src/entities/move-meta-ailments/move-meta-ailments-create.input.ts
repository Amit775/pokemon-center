import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MoveMetaCreateNestedManyWithoutMetaAilmentInput } from '../move-meta/move-meta-create-nested-many-without-meta-ailment.input';

@InputType()
export class MoveMetaAilmentsCreateInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => MoveMetaCreateNestedManyWithoutMetaAilmentInput, {nullable:true})
    meta?: MoveMetaCreateNestedManyWithoutMetaAilmentInput;
}
