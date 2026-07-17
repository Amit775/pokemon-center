import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MachinesScalarWhereInput } from './machines-scalar-where.input';
import { Type } from 'class-transformer';
import { MachinesUpdateManyMutationInput } from './machines-update-many-mutation.input';

@InputType()
export class MachinesUpdateManyWithWhereWithoutItemInput {

    @Field(() => MachinesScalarWhereInput, {nullable:false})
    @Type(() => MachinesScalarWhereInput)
    where!: Identity<MachinesScalarWhereInput>;

    @Field(() => MachinesUpdateManyMutationInput, {nullable:false})
    @Type(() => MachinesUpdateManyMutationInput)
    data!: Identity<MachinesUpdateManyMutationInput>;
}
