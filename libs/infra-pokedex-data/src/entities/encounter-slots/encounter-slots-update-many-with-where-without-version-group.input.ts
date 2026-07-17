import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EncounterSlotsScalarWhereInput } from './encounter-slots-scalar-where.input';
import { Type } from 'class-transformer';
import { EncounterSlotsUpdateManyMutationInput } from './encounter-slots-update-many-mutation.input';

@InputType()
export class EncounterSlotsUpdateManyWithWhereWithoutVersionGroupInput {

    @Field(() => EncounterSlotsScalarWhereInput, {nullable:false})
    @Type(() => EncounterSlotsScalarWhereInput)
    where!: EncounterSlotsScalarWhereInput;

    @Field(() => EncounterSlotsUpdateManyMutationInput, {nullable:false})
    @Type(() => EncounterSlotsUpdateManyMutationInput)
    data!: EncounterSlotsUpdateManyMutationInput;
}
