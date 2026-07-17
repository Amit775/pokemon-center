import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EncountersCreateWithoutConditionValueMapInput } from './encounters-create-without-condition-value-map.input';
import { Type } from 'class-transformer';
import { EncountersCreateOrConnectWithoutConditionValueMapInput } from './encounters-create-or-connect-without-condition-value-map.input';
import { Prisma } from '@prisma/client';
import { EncountersWhereUniqueInput } from './encounters-where-unique.input';

@InputType()
export class EncountersCreateNestedOneWithoutConditionValueMapInput {

    @Field(() => EncountersCreateWithoutConditionValueMapInput, {nullable:true})
    @Type(() => EncountersCreateWithoutConditionValueMapInput)
    create?: EncountersCreateWithoutConditionValueMapInput;

    @Field(() => EncountersCreateOrConnectWithoutConditionValueMapInput, {nullable:true})
    @Type(() => EncountersCreateOrConnectWithoutConditionValueMapInput)
    connectOrCreate?: EncountersCreateOrConnectWithoutConditionValueMapInput;

    @Field(() => EncountersWhereUniqueInput, {nullable:true})
    @Type(() => EncountersWhereUniqueInput)
    connect?: Prisma.AtLeast<EncountersWhereUniqueInput, 'id'>;
}
