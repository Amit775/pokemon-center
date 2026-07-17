import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { RegionsCreateInput } from './regions-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneRegionsArgs {

    @Field(() => RegionsCreateInput, {nullable:false})
    @Type(() => RegionsCreateInput)
    data!: Identity<RegionsCreateInput>;
}
