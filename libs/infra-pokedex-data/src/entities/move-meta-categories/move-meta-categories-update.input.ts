import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MoveMetaUpdateManyWithoutMetaCategoryNestedInput } from '../move-meta/move-meta-update-many-without-meta-category-nested.input';

@InputType()
export class MoveMetaCategoriesUpdateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => MoveMetaUpdateManyWithoutMetaCategoryNestedInput, {nullable:true})
    meta?: Identity<MoveMetaUpdateManyWithoutMetaCategoryNestedInput>;
}
