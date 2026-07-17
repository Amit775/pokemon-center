import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { VersionsScalarWhereInput } from './versions-scalar-where.input';
import { Type } from 'class-transformer';
import { VersionsUpdateManyMutationInput } from './versions-update-many-mutation.input';

@InputType()
export class VersionsUpdateManyWithWhereWithoutVersionGroupInput {

    @Field(() => VersionsScalarWhereInput, {nullable:false})
    @Type(() => VersionsScalarWhereInput)
    where!: Identity<VersionsScalarWhereInput>;

    @Field(() => VersionsUpdateManyMutationInput, {nullable:false})
    @Type(() => VersionsUpdateManyMutationInput)
    data!: Identity<VersionsUpdateManyMutationInput>;
}
