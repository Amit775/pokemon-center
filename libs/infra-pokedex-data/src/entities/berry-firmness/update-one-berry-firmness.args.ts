import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { BerryFirmnessUpdateInput } from './berry-firmness-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@pokemon-center/prisma';
import { BerryFirmnessWhereUniqueInput } from './berry-firmness-where-unique.input';

@ArgsType()
export class UpdateOneBerryFirmnessArgs {

    @Field(() => BerryFirmnessUpdateInput, {nullable:false})
    @Type(() => BerryFirmnessUpdateInput)
    data!: Identity<BerryFirmnessUpdateInput>;

    @Field(() => BerryFirmnessWhereUniqueInput, {nullable:false})
    @Type(() => BerryFirmnessWhereUniqueInput)
    where!: Prisma.AtLeast<BerryFirmnessWhereUniqueInput, 'id'>;
}
