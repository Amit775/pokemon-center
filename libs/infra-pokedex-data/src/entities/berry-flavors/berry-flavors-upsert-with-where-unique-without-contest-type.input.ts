import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BerryFlavorsWhereUniqueInput } from './berry-flavors-where-unique.input';
import { Type } from 'class-transformer';
import { BerryFlavorsUpdateWithoutContestTypeInput } from './berry-flavors-update-without-contest-type.input';
import { BerryFlavorsCreateWithoutContestTypeInput } from './berry-flavors-create-without-contest-type.input';

@InputType()
export class BerryFlavorsUpsertWithWhereUniqueWithoutContestTypeInput {

    @Field(() => BerryFlavorsWhereUniqueInput, {nullable:false})
    @Type(() => BerryFlavorsWhereUniqueInput)
    where!: Prisma.AtLeast<BerryFlavorsWhereUniqueInput, 'berry_id_contest_type_id'>;

    @Field(() => BerryFlavorsUpdateWithoutContestTypeInput, {nullable:false})
    @Type(() => BerryFlavorsUpdateWithoutContestTypeInput)
    update!: BerryFlavorsUpdateWithoutContestTypeInput;

    @Field(() => BerryFlavorsCreateWithoutContestTypeInput, {nullable:false})
    @Type(() => BerryFlavorsCreateWithoutContestTypeInput)
    create!: BerryFlavorsCreateWithoutContestTypeInput;
}
