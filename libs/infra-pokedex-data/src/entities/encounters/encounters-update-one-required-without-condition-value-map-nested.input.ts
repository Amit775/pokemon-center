import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { EncountersCreateWithoutConditionValueMapInput } from './encounters-create-without-condition-value-map.input';
import { Type } from 'class-transformer';
import { EncountersCreateOrConnectWithoutConditionValueMapInput } from './encounters-create-or-connect-without-condition-value-map.input';
import { EncountersUpsertWithoutConditionValueMapInput } from './encounters-upsert-without-condition-value-map.input';
import { Prisma } from '@pokemon-center/prisma';
import { EncountersWhereUniqueInput } from './encounters-where-unique.input';
import { EncountersUpdateToOneWithWhereWithoutConditionValueMapInput } from './encounters-update-to-one-with-where-without-condition-value-map.input';

@InputType()
export class EncountersUpdateOneRequiredWithoutConditionValueMapNestedInput {

    @Field(() => EncountersCreateWithoutConditionValueMapInput, {nullable:true})
    @Type(() => EncountersCreateWithoutConditionValueMapInput)
    create?: Identity<EncountersCreateWithoutConditionValueMapInput>;

    @Field(() => EncountersCreateOrConnectWithoutConditionValueMapInput, {nullable:true})
    @Type(() => EncountersCreateOrConnectWithoutConditionValueMapInput)
    connectOrCreate?: Identity<EncountersCreateOrConnectWithoutConditionValueMapInput>;

    @Field(() => EncountersUpsertWithoutConditionValueMapInput, {nullable:true})
    @Type(() => EncountersUpsertWithoutConditionValueMapInput)
    upsert?: Identity<EncountersUpsertWithoutConditionValueMapInput>;

    @Field(() => EncountersWhereUniqueInput, {nullable:true})
    @Type(() => EncountersWhereUniqueInput)
    connect?: Prisma.AtLeast<EncountersWhereUniqueInput, 'id'>;

    @Field(() => EncountersUpdateToOneWithWhereWithoutConditionValueMapInput, {nullable:true})
    @Type(() => EncountersUpdateToOneWithWhereWithoutConditionValueMapInput)
    update?: Identity<EncountersUpdateToOneWithWhereWithoutConditionValueMapInput>;
}
