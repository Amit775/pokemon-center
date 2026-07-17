import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { RegionsWhereUniqueInput } from './regions-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { RegionsCreateWithoutVersionGroupsInput } from './regions-create-without-version-groups.input';

@InputType()
export class RegionsCreateOrConnectWithoutVersionGroupsInput {

    @Field(() => RegionsWhereUniqueInput, {nullable:false})
    @Type(() => RegionsWhereUniqueInput)
    where!: Prisma.AtLeast<RegionsWhereUniqueInput, 'id'>;

    @Field(() => RegionsCreateWithoutVersionGroupsInput, {nullable:false})
    @Type(() => RegionsCreateWithoutVersionGroupsInput)
    create!: Identity<RegionsCreateWithoutVersionGroupsInput>;
}
