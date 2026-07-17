import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class LocationsScalarWhereInput {

    @Field(() => [LocationsScalarWhereInput], {nullable:true})
    AND?: Array<LocationsScalarWhereInput>;

    @Field(() => [LocationsScalarWhereInput], {nullable:true})
    OR?: Array<LocationsScalarWhereInput>;

    @Field(() => [LocationsScalarWhereInput], {nullable:true})
    NOT?: Array<LocationsScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    region_id?: Identity<IntFilter>;

    @Field(() => StringFilter, {nullable:true})
    identifier?: Identity<StringFilter>;
}
