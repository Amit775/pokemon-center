import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { EncounterSlotsUpdateManyMutationInput } from './encounter-slots-update-many-mutation.input';
import { Type } from 'class-transformer';
import { EncounterSlotsWhereInput } from './encounter-slots-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyEncounterSlotsArgs {

    @Field(() => EncounterSlotsUpdateManyMutationInput, {nullable:false})
    @Type(() => EncounterSlotsUpdateManyMutationInput)
    data!: Identity<EncounterSlotsUpdateManyMutationInput>;

    @Field(() => EncounterSlotsWhereInput, {nullable:true})
    @Type(() => EncounterSlotsWhereInput)
    where?: Identity<EncounterSlotsWhereInput>;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
