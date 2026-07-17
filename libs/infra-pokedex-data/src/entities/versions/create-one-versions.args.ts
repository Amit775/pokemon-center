import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { VersionsCreateInput } from './versions-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneVersionsArgs {

    @Field(() => VersionsCreateInput, {nullable:false})
    @Type(() => VersionsCreateInput)
    data!: Identity<VersionsCreateInput>;
}
