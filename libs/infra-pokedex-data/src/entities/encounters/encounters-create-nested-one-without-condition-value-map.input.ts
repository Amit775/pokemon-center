import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { EncountersCreateWithoutConditionValueMapInput } from './encounters-create-without-condition-value-map.input';
import { Type } from 'class-transformer';
import { EncountersCreateOrConnectWithoutConditionValueMapInput } from './encounters-create-or-connect-without-condition-value-map.input';
import { Prisma } from '@pokemon-center/prisma';
import { EncountersWhereUniqueInput } from './encounters-where-unique.input';

@InputType()
export class EncountersCreateNestedOneWithoutConditionValueMapInput {

    @Field(() => EncountersCreateWithoutConditionValueMapInput, {nullable:true})
    @Type(() => EncountersCreateWithoutConditionValueMapInput)
    create?: Identity<EncountersCreateWithoutConditionValueMapInput>;

    @Field(() => EncountersCreateOrConnectWithoutConditionValueMapInput, {nullable:true})
    @Type(() => EncountersCreateOrConnectWithoutConditionValueMapInput)
    connectOrCreate?: Identity<EncountersCreateOrConnectWithoutConditionValueMapInput>;

    @Field(() => EncountersWhereUniqueInput, {nullable:true})
    @Type(() => EncountersWhereUniqueInput)
    connect?: Prisma.AtLeast<EncountersWhereUniqueInput, 'id'>;
}
