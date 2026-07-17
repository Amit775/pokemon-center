import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { VersionsUpdateInput } from './versions-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@pokemon-center/prisma';
import { VersionsWhereUniqueInput } from './versions-where-unique.input';

@ArgsType()
export class UpdateOneVersionsArgs {

    @Field(() => VersionsUpdateInput, {nullable:false})
    @Type(() => VersionsUpdateInput)
    data!: Identity<VersionsUpdateInput>;

    @Field(() => VersionsWhereUniqueInput, {nullable:false})
    @Type(() => VersionsWhereUniqueInput)
    where!: Prisma.AtLeast<VersionsWhereUniqueInput, 'id'>;
}
