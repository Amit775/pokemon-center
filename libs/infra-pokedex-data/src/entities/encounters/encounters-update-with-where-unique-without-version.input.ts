import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { EncountersWhereUniqueInput } from './encounters-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { EncountersUpdateWithoutVersionInput } from './encounters-update-without-version.input';

@InputType()
export class EncountersUpdateWithWhereUniqueWithoutVersionInput {

    @Field(() => EncountersWhereUniqueInput, {nullable:false})
    @Type(() => EncountersWhereUniqueInput)
    where!: Prisma.AtLeast<EncountersWhereUniqueInput, 'id'>;

    @Field(() => EncountersUpdateWithoutVersionInput, {nullable:false})
    @Type(() => EncountersUpdateWithoutVersionInput)
    data!: Identity<EncountersUpdateWithoutVersionInput>;
}
