import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class GenerationsScalarWhereInput {

    @Field(() => [GenerationsScalarWhereInput], {nullable:true})
    AND?: Array<GenerationsScalarWhereInput>;

    @Field(() => [GenerationsScalarWhereInput], {nullable:true})
    OR?: Array<GenerationsScalarWhereInput>;

    @Field(() => [GenerationsScalarWhereInput], {nullable:true})
    NOT?: Array<GenerationsScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    main_region_id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    identifier?: StringFilter;
}
