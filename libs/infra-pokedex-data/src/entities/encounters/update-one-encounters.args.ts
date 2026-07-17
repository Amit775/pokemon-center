import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { EncountersUpdateInput } from './encounters-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@pokemon-center/prisma';
import { EncountersWhereUniqueInput } from './encounters-where-unique.input';

@ArgsType()
export class UpdateOneEncountersArgs {

    @Field(() => EncountersUpdateInput, {nullable:false})
    @Type(() => EncountersUpdateInput)
    data!: Identity<EncountersUpdateInput>;

    @Field(() => EncountersWhereUniqueInput, {nullable:false})
    @Type(() => EncountersWhereUniqueInput)
    where!: Prisma.AtLeast<EncountersWhereUniqueInput, 'id'>;
}
