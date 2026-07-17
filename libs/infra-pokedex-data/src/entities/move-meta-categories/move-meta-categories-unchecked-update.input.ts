import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MoveMetaUncheckedUpdateManyWithoutMetaCategoryNestedInput } from '../move-meta/move-meta-unchecked-update-many-without-meta-category-nested.input';

@InputType()
export class MoveMetaCategoriesUncheckedUpdateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => MoveMetaUncheckedUpdateManyWithoutMetaCategoryNestedInput, {nullable:true})
    meta?: Identity<MoveMetaUncheckedUpdateManyWithoutMetaCategoryNestedInput>;
}
