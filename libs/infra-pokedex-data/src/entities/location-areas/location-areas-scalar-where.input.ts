import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class LocationAreasScalarWhereInput {

    @Field(() => [LocationAreasScalarWhereInput], {nullable:true})
    AND?: Array<LocationAreasScalarWhereInput>;

    @Field(() => [LocationAreasScalarWhereInput], {nullable:true})
    OR?: Array<LocationAreasScalarWhereInput>;

    @Field(() => [LocationAreasScalarWhereInput], {nullable:true})
    NOT?: Array<LocationAreasScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    location_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    game_index?: Identity<IntFilter>;

    @Field(() => StringFilter, {nullable:true})
    identifier?: Identity<StringFilter>;
}
