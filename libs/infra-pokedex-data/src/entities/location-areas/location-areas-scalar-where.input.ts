import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class LocationAreasScalarWhereInput {

    @Field(() => [LocationAreasScalarWhereInput], {nullable:true})
    AND?: Array<LocationAreasScalarWhereInput>;

    @Field(() => [LocationAreasScalarWhereInput], {nullable:true})
    OR?: Array<LocationAreasScalarWhereInput>;

    @Field(() => [LocationAreasScalarWhereInput], {nullable:true})
    NOT?: Array<LocationAreasScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    location_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    game_index?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    identifier?: StringNullableFilter;
}
