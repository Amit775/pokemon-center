import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VersionsUpdateInput } from './versions-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { VersionsWhereUniqueInput } from './versions-where-unique.input';

@ArgsType()
export class UpdateOneVersionsArgs {

    @Field(() => VersionsUpdateInput, {nullable:false})
    @Type(() => VersionsUpdateInput)
    data!: VersionsUpdateInput;

    @Field(() => VersionsWhereUniqueInput, {nullable:false})
    @Type(() => VersionsWhereUniqueInput)
    where!: Prisma.AtLeast<VersionsWhereUniqueInput, 'id'>;
}
