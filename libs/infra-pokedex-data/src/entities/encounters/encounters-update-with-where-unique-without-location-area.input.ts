import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { EncountersWhereUniqueInput } from './encounters-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { EncountersUpdateWithoutLocationAreaInput } from './encounters-update-without-location-area.input';

@InputType()
export class EncountersUpdateWithWhereUniqueWithoutLocationAreaInput {

    @Field(() => EncountersWhereUniqueInput, {nullable:false})
    @Type(() => EncountersWhereUniqueInput)
    where!: Prisma.AtLeast<EncountersWhereUniqueInput, 'id'>;

    @Field(() => EncountersUpdateWithoutLocationAreaInput, {nullable:false})
    @Type(() => EncountersUpdateWithoutLocationAreaInput)
    data!: Identity<EncountersUpdateWithoutLocationAreaInput>;
}
