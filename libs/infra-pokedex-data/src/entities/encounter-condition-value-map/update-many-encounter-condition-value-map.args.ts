import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { EncounterConditionValueMapUncheckedUpdateManyInput } from './encounter-condition-value-map-unchecked-update-many.input';
import { Type } from 'class-transformer';
import { EncounterConditionValueMapWhereInput } from './encounter-condition-value-map-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyEncounterConditionValueMapArgs {

    @Field(() => EncounterConditionValueMapUncheckedUpdateManyInput, {nullable:false})
    @Type(() => EncounterConditionValueMapUncheckedUpdateManyInput)
    data!: Identity<EncounterConditionValueMapUncheckedUpdateManyInput>;

    @Field(() => EncounterConditionValueMapWhereInput, {nullable:true})
    @Type(() => EncounterConditionValueMapWhereInput)
    where?: Identity<EncounterConditionValueMapWhereInput>;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
