import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { EncountersWhereUniqueInput } from './encounters-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { EncountersCreateWithoutLocationAreaInput } from './encounters-create-without-location-area.input';

@InputType()
export class EncountersCreateOrConnectWithoutLocationAreaInput {

    @Field(() => EncountersWhereUniqueInput, {nullable:false})
    @Type(() => EncountersWhereUniqueInput)
    where!: Prisma.AtLeast<EncountersWhereUniqueInput, 'id'>;

    @Field(() => EncountersCreateWithoutLocationAreaInput, {nullable:false})
    @Type(() => EncountersCreateWithoutLocationAreaInput)
    create!: Identity<EncountersCreateWithoutLocationAreaInput>;
}
