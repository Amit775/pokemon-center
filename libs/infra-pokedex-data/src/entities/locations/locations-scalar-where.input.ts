import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
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
    id?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    region_id?: IntNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    identifier?: StringFilter;
}
