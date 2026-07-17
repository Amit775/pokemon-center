import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EncountersWhereUniqueInput } from './encounters-where-unique.input';
import { Type } from 'class-transformer';
import { EncountersCreateWithoutConditionValueMapInput } from './encounters-create-without-condition-value-map.input';

@InputType()
export class EncountersCreateOrConnectWithoutConditionValueMapInput {

    @Field(() => EncountersWhereUniqueInput, {nullable:false})
    @Type(() => EncountersWhereUniqueInput)
    where!: Prisma.AtLeast<EncountersWhereUniqueInput, 'id'>;

    @Field(() => EncountersCreateWithoutConditionValueMapInput, {nullable:false})
    @Type(() => EncountersCreateWithoutConditionValueMapInput)
    create!: EncountersCreateWithoutConditionValueMapInput;
}
