import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BerryFirmnessWhereUniqueInput } from './berry-firmness-where-unique.input';
import { Type } from 'class-transformer';
import { BerryFirmnessCreateInput } from './berry-firmness-create.input';
import { BerryFirmnessUpdateInput } from './berry-firmness-update.input';

@ArgsType()
export class UpsertOneBerryFirmnessArgs {

    @Field(() => BerryFirmnessWhereUniqueInput, {nullable:false})
    @Type(() => BerryFirmnessWhereUniqueInput)
    where!: Prisma.AtLeast<BerryFirmnessWhereUniqueInput, 'id'>;

    @Field(() => BerryFirmnessCreateInput, {nullable:false})
    @Type(() => BerryFirmnessCreateInput)
    create!: BerryFirmnessCreateInput;

    @Field(() => BerryFirmnessUpdateInput, {nullable:false})
    @Type(() => BerryFirmnessUpdateInput)
    update!: BerryFirmnessUpdateInput;
}
