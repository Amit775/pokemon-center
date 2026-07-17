import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
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
    berry_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    contest_type_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    flavor?: Identity<IntFilter>;
}
