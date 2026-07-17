import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { VersionsWhereUniqueInput } from './versions-where-unique.input';
import { Type } from 'class-transformer';
import { VersionsCreateInput } from './versions-create.input';
import { VersionsUpdateInput } from './versions-update.input';

@ArgsType()
export class UpsertOneVersionsArgs {

    @Field(() => VersionsWhereUniqueInput, {nullable:false})
    @Type(() => VersionsWhereUniqueInput)
    where!: Prisma.AtLeast<VersionsWhereUniqueInput, 'id'>;

    @Field(() => VersionsCreateInput, {nullable:false})
    @Type(() => VersionsCreateInput)
    create!: VersionsCreateInput;

    @Field(() => VersionsUpdateInput, {nullable:false})
    @Type(() => VersionsUpdateInput)
    update!: VersionsUpdateInput;
}
