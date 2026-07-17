import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { EncounterSlotsScalarWhereInput } from './encounter-slots-scalar-where.input';
import { Type } from 'class-transformer';
import { EncounterSlotsUpdateManyMutationInput } from './encounter-slots-update-many-mutation.input';

@InputType()
export class EncounterSlotsUpdateManyWithWhereWithoutVersionGroupInput {

    @Field(() => EncounterSlotsScalarWhereInput, {nullable:false})
    @Type(() => EncounterSlotsScalarWhereInput)
    where!: Identity<EncounterSlotsScalarWhereInput>;

    @Field(() => EncounterSlotsUpdateManyMutationInput, {nullable:false})
    @Type(() => EncounterSlotsUpdateManyMutationInput)
    data!: Identity<EncounterSlotsUpdateManyMutationInput>;
}
