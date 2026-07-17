import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { EncountersWhereUniqueInput } from './encounters-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { EncountersCreateWithoutConditionValueMapInput } from './encounters-create-without-condition-value-map.input';

@InputType()
export class EncountersCreateOrConnectWithoutConditionValueMapInput {

    @Field(() => EncountersWhereUniqueInput, {nullable:false})
    @Type(() => EncountersWhereUniqueInput)
    where!: Prisma.AtLeast<EncountersWhereUniqueInput, 'id'>;

    @Field(() => EncountersCreateWithoutConditionValueMapInput, {nullable:false})
    @Type(() => EncountersCreateWithoutConditionValueMapInput)
    create!: Identity<EncountersCreateWithoutConditionValueMapInput>;
}
