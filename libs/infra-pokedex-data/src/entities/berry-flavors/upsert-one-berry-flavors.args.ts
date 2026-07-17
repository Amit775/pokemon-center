import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BerryFlavorsWhereUniqueInput } from './berry-flavors-where-unique.input';
import { Type } from 'class-transformer';
import { BerryFlavorsCreateInput } from './berry-flavors-create.input';
import { BerryFlavorsUpdateInput } from './berry-flavors-update.input';

@ArgsType()
export class UpsertOneBerryFlavorsArgs {

    @Field(() => BerryFlavorsWhereUniqueInput, {nullable:false})
    @Type(() => BerryFlavorsWhereUniqueInput)
    where!: Prisma.AtLeast<BerryFlavorsWhereUniqueInput, 'berry_id_contest_type_id'>;

    @Field(() => BerryFlavorsCreateInput, {nullable:false})
    @Type(() => BerryFlavorsCreateInput)
    create!: BerryFlavorsCreateInput;

    @Field(() => BerryFlavorsUpdateInput, {nullable:false})
    @Type(() => BerryFlavorsUpdateInput)
    update!: BerryFlavorsUpdateInput;
}
