import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MoveMetaStatChangesScalarWhereInput } from './move-meta-stat-changes-scalar-where.input';
import { Type } from 'class-transformer';
import { MoveMetaStatChangesUpdateManyMutationInput } from './move-meta-stat-changes-update-many-mutation.input';

@InputType()
export class MoveMetaStatChangesUpdateManyWithWhereWithoutStatInput {

    @Field(() => MoveMetaStatChangesScalarWhereInput, {nullable:false})
    @Type(() => MoveMetaStatChangesScalarWhereInput)
    where!: Identity<MoveMetaStatChangesScalarWhereInput>;

    @Field(() => MoveMetaStatChangesUpdateManyMutationInput, {nullable:false})
    @Type(() => MoveMetaStatChangesUpdateManyMutationInput)
    data!: Identity<MoveMetaStatChangesUpdateManyMutationInput>;
}
