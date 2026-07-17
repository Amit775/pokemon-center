import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { EncountersUpdateWithoutConditionValueMapInput } from './encounters-update-without-condition-value-map.input';
import { Type } from 'class-transformer';
import { EncountersCreateWithoutConditionValueMapInput } from './encounters-create-without-condition-value-map.input';
import { EncountersWhereInput } from './encounters-where.input';

@InputType()
export class EncountersUpsertWithoutConditionValueMapInput {

    @Field(() => EncountersUpdateWithoutConditionValueMapInput, {nullable:false})
    @Type(() => EncountersUpdateWithoutConditionValueMapInput)
    update!: Identity<EncountersUpdateWithoutConditionValueMapInput>;

    @Field(() => EncountersCreateWithoutConditionValueMapInput, {nullable:false})
    @Type(() => EncountersCreateWithoutConditionValueMapInput)
    create!: Identity<EncountersCreateWithoutConditionValueMapInput>;

    @Field(() => EncountersWhereInput, {nullable:true})
    @Type(() => EncountersWhereInput)
    where?: Identity<EncountersWhereInput>;
}
