import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { EncountersWhereUniqueInput } from './encounters-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { EncountersCreateInput } from './encounters-create.input';
import { EncountersUpdateInput } from './encounters-update.input';

@ArgsType()
export class UpsertOneEncountersArgs {

    @Field(() => EncountersWhereUniqueInput, {nullable:false})
    @Type(() => EncountersWhereUniqueInput)
    where!: Prisma.AtLeast<EncountersWhereUniqueInput, 'id'>;

    @Field(() => EncountersCreateInput, {nullable:false})
    @Type(() => EncountersCreateInput)
    create!: Identity<EncountersCreateInput>;

    @Field(() => EncountersUpdateInput, {nullable:false})
    @Type(() => EncountersUpdateInput)
    update!: Identity<EncountersUpdateInput>;
}
