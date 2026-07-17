import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EncountersWhereUniqueInput } from './encounters-where-unique.input';
import { Type } from 'class-transformer';
import { EncountersCreateWithoutVersionInput } from './encounters-create-without-version.input';

@InputType()
export class EncountersCreateOrConnectWithoutVersionInput {

    @Field(() => EncountersWhereUniqueInput, {nullable:false})
    @Type(() => EncountersWhereUniqueInput)
    where!: Prisma.AtLeast<EncountersWhereUniqueInput, 'id'>;

    @Field(() => EncountersCreateWithoutVersionInput, {nullable:false})
    @Type(() => EncountersCreateWithoutVersionInput)
    create!: EncountersCreateWithoutVersionInput;
}
