import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VersionsUpdateManyMutationInput } from './versions-update-many-mutation.input';
import { Type } from 'class-transformer';
import { VersionsWhereInput } from './versions-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyVersionsArgs {

    @Field(() => VersionsUpdateManyMutationInput, {nullable:false})
    @Type(() => VersionsUpdateManyMutationInput)
    data!: VersionsUpdateManyMutationInput;

    @Field(() => VersionsWhereInput, {nullable:true})
    @Type(() => VersionsWhereInput)
    where?: VersionsWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
