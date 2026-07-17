import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BerryFlavorsUpdateInput } from './berry-flavors-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { BerryFlavorsWhereUniqueInput } from './berry-flavors-where-unique.input';

@ArgsType()
export class UpdateOneBerryFlavorsArgs {

    @Field(() => BerryFlavorsUpdateInput, {nullable:false})
    @Type(() => BerryFlavorsUpdateInput)
    data!: BerryFlavorsUpdateInput;

    @Field(() => BerryFlavorsWhereUniqueInput, {nullable:false})
    @Type(() => BerryFlavorsWhereUniqueInput)
    where!: Prisma.AtLeast<BerryFlavorsWhereUniqueInput, 'berry_id_contest_type_id'>;
}
