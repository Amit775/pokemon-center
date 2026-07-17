import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { EncounterConditionsUpdateManyMutationInput } from './encounter-conditions-update-many-mutation.input';
import { Type } from 'class-transformer';
import { EncounterConditionsWhereInput } from './encounter-conditions-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyEncounterConditionsArgs {

    @Field(() => EncounterConditionsUpdateManyMutationInput, {nullable:false})
    @Type(() => EncounterConditionsUpdateManyMutationInput)
    data!: Identity<EncounterConditionsUpdateManyMutationInput>;

    @Field(() => EncounterConditionsWhereInput, {nullable:true})
    @Type(() => EncounterConditionsWhereInput)
    where?: Identity<EncounterConditionsWhereInput>;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
