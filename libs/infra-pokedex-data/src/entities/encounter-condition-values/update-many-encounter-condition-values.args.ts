import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { EncounterConditionValuesUpdateManyMutationInput } from './encounter-condition-values-update-many-mutation.input';
import { Type } from 'class-transformer';
import { EncounterConditionValuesWhereInput } from './encounter-condition-values-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyEncounterConditionValuesArgs {

    @Field(() => EncounterConditionValuesUpdateManyMutationInput, {nullable:false})
    @Type(() => EncounterConditionValuesUpdateManyMutationInput)
    data!: Identity<EncounterConditionValuesUpdateManyMutationInput>;

    @Field(() => EncounterConditionValuesWhereInput, {nullable:true})
    @Type(() => EncounterConditionValuesWhereInput)
    where?: Identity<EncounterConditionValuesWhereInput>;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
