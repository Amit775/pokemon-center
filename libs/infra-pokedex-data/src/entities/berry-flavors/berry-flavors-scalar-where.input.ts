import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class BerryFlavorsScalarWhereInput {

    @Field(() => [BerryFlavorsScalarWhereInput], {nullable:true})
    AND?: Array<BerryFlavorsScalarWhereInput>;

    @Field(() => [BerryFlavorsScalarWhereInput], {nullable:true})
    OR?: Array<BerryFlavorsScalarWhereInput>;

    @Field(() => [BerryFlavorsScalarWhereInput], {nullable:true})
    NOT?: Array<BerryFlavorsScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    berry_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    contest_type_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    flavor?: IntFilter;
}
