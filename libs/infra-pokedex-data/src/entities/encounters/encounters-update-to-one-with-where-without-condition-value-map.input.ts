import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { EncountersWhereInput } from './encounters-where.input';
import { Type } from 'class-transformer';
import { EncountersUpdateWithoutConditionValueMapInput } from './encounters-update-without-condition-value-map.input';

@InputType()
export class EncountersUpdateToOneWithWhereWithoutConditionValueMapInput {

    @Field(() => EncountersWhereInput, {nullable:true})
    @Type(() => EncountersWhereInput)
    where?: Identity<EncountersWhereInput>;

    @Field(() => EncountersUpdateWithoutConditionValueMapInput, {nullable:false})
    @Type(() => EncountersUpdateWithoutConditionValueMapInput)
    data!: Identity<EncountersUpdateWithoutConditionValueMapInput>;
}
