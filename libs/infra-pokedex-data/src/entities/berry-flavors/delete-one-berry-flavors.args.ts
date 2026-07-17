import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { BerryFlavorsWhereUniqueInput } from './berry-flavors-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneBerryFlavorsArgs {

    @Field(() => BerryFlavorsWhereUniqueInput, {nullable:false})
    @Type(() => BerryFlavorsWhereUniqueInput)
    where!: Prisma.AtLeast<BerryFlavorsWhereUniqueInput, 'berry_id_contest_type_id'>;
}
