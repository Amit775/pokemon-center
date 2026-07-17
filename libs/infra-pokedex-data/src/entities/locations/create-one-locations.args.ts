import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { LocationsCreateInput } from './locations-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneLocationsArgs {

    @Field(() => LocationsCreateInput, {nullable:false})
    @Type(() => LocationsCreateInput)
    data!: Identity<LocationsCreateInput>;
}
