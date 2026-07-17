import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NaturesWhereUniqueInput } from './natures-where-unique.input';
import { Type } from 'class-transformer';
import { NaturesUpdateWithoutDecreasedStatInput } from './natures-update-without-decreased-stat.input';
import { NaturesCreateWithoutDecreasedStatInput } from './natures-create-without-decreased-stat.input';

@InputType()
export class NaturesUpsertWithWhereUniqueWithoutDecreasedStatInput {

    @Field(() => NaturesWhereUniqueInput, {nullable:false})
    @Type(() => NaturesWhereUniqueInput)
    where!: Prisma.AtLeast<NaturesWhereUniqueInput, 'id'>;

    @Field(() => NaturesUpdateWithoutDecreasedStatInput, {nullable:false})
    @Type(() => NaturesUpdateWithoutDecreasedStatInput)
    update!: NaturesUpdateWithoutDecreasedStatInput;

    @Field(() => NaturesCreateWithoutDecreasedStatInput, {nullable:false})
    @Type(() => NaturesCreateWithoutDecreasedStatInput)
    create!: NaturesCreateWithoutDecreasedStatInput;
}
