import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { EncountersScalarWhereInput } from './encounters-scalar-where.input';
import { Type } from 'class-transformer';
import { EncountersUpdateManyMutationInput } from './encounters-update-many-mutation.input';

@InputType()
export class EncountersUpdateManyWithWhereWithoutVersionInput {

    @Field(() => EncountersScalarWhereInput, {nullable:false})
    @Type(() => EncountersScalarWhereInput)
    where!: Identity<EncountersScalarWhereInput>;

    @Field(() => EncountersUpdateManyMutationInput, {nullable:false})
    @Type(() => EncountersUpdateManyMutationInput)
    data!: Identity<EncountersUpdateManyMutationInput>;
}
