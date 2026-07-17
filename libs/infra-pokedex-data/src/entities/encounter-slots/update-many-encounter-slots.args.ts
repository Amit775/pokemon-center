import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EncounterSlotsUpdateManyMutationInput } from './encounter-slots-update-many-mutation.input';
import { Type } from 'class-transformer';
import { EncounterSlotsWhereInput } from './encounter-slots-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyEncounterSlotsArgs {

    @Field(() => EncounterSlotsUpdateManyMutationInput, {nullable:false})
    @Type(() => EncounterSlotsUpdateManyMutationInput)
    data!: EncounterSlotsUpdateManyMutationInput;

    @Field(() => EncounterSlotsWhereInput, {nullable:true})
    @Type(() => EncounterSlotsWhereInput)
    where?: EncounterSlotsWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
