import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NaturesWhereUniqueInput } from './natures-where-unique.input';
import { Type } from 'class-transformer';
import { NaturesUpdateWithoutIncreasedStatInput } from './natures-update-without-increased-stat.input';
import { NaturesCreateWithoutIncreasedStatInput } from './natures-create-without-increased-stat.input';

@InputType()
export class NaturesUpsertWithWhereUniqueWithoutIncreasedStatInput {

    @Field(() => NaturesWhereUniqueInput, {nullable:false})
    @Type(() => NaturesWhereUniqueInput)
    where!: Prisma.AtLeast<NaturesWhereUniqueInput, 'id'>;

    @Field(() => NaturesUpdateWithoutIncreasedStatInput, {nullable:false})
    @Type(() => NaturesUpdateWithoutIncreasedStatInput)
    update!: NaturesUpdateWithoutIncreasedStatInput;

    @Field(() => NaturesCreateWithoutIncreasedStatInput, {nullable:false})
    @Type(() => NaturesCreateWithoutIncreasedStatInput)
    create!: NaturesCreateWithoutIncreasedStatInput;
}
