import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class LocationGameIndicesScalarWhereInput {

    @Field(() => [LocationGameIndicesScalarWhereInput], {nullable:true})
    AND?: Array<LocationGameIndicesScalarWhereInput>;

    @Field(() => [LocationGameIndicesScalarWhereInput], {nullable:true})
    OR?: Array<LocationGameIndicesScalarWhereInput>;

    @Field(() => [LocationGameIndicesScalarWhereInput], {nullable:true})
    NOT?: Array<LocationGameIndicesScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    location_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    generation_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    game_index?: IntFilter;
}
