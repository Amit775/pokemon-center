import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MovesScalarWhereInput } from './moves-scalar-where.input';
import { Type } from 'class-transformer';
import { MovesUpdateManyMutationInput } from './moves-update-many-mutation.input';

@InputType()
export class MovesUpdateManyWithWhereWithoutTargetInput {

    @Field(() => MovesScalarWhereInput, {nullable:false})
    @Type(() => MovesScalarWhereInput)
    where!: Identity<MovesScalarWhereInput>;

    @Field(() => MovesUpdateManyMutationInput, {nullable:false})
    @Type(() => MovesUpdateManyMutationInput)
    data!: Identity<MovesUpdateManyMutationInput>;
}
