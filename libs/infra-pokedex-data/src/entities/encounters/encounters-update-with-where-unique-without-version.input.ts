import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EncountersWhereUniqueInput } from './encounters-where-unique.input';
import { Type } from 'class-transformer';
import { EncountersUpdateWithoutVersionInput } from './encounters-update-without-version.input';

@InputType()
export class EncountersUpdateWithWhereUniqueWithoutVersionInput {

    @Field(() => EncountersWhereUniqueInput, {nullable:false})
    @Type(() => EncountersWhereUniqueInput)
    where!: Prisma.AtLeast<EncountersWhereUniqueInput, 'id'>;

    @Field(() => EncountersUpdateWithoutVersionInput, {nullable:false})
    @Type(() => EncountersUpdateWithoutVersionInput)
    data!: EncountersUpdateWithoutVersionInput;
}
