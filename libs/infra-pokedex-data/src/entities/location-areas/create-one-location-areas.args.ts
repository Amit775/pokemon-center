import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { LocationAreasCreateInput } from './location-areas-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneLocationAreasArgs {

    @Field(() => LocationAreasCreateInput, {nullable:false})
    @Type(() => LocationAreasCreateInput)
    data!: Identity<LocationAreasCreateInput>;
}
