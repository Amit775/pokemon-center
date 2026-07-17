import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { BerryFirmnessWhereUniqueInput } from './berry-firmness-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneBerryFirmnessArgs {

    @Field(() => BerryFirmnessWhereUniqueInput, {nullable:false})
    @Type(() => BerryFirmnessWhereUniqueInput)
    where!: Prisma.AtLeast<BerryFirmnessWhereUniqueInput, 'id'>;
}
