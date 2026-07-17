import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MoveMetaCreateNestedOneWithoutStatChangesInput } from '../move-meta/move-meta-create-nested-one-without-stat-changes.input';

@InputType()
export class MoveMetaStatChangesCreateWithoutStatInput {

    @Field(() => Int, {nullable:false})
    change!: number;

    @Field(() => MoveMetaCreateNestedOneWithoutStatChangesInput, {nullable:false})
    meta!: Identity<MoveMetaCreateNestedOneWithoutStatChangesInput>;
}
