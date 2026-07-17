import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NaturesWhereUniqueInput } from './natures-where-unique.input';
import { Type } from 'class-transformer';
import { NaturesCreateInput } from './natures-create.input';
import { NaturesUpdateInput } from './natures-update.input';

@ArgsType()
export class UpsertOneNaturesArgs {

    @Field(() => NaturesWhereUniqueInput, {nullable:false})
    @Type(() => NaturesWhereUniqueInput)
    where!: Prisma.AtLeast<NaturesWhereUniqueInput, 'id'>;

    @Field(() => NaturesCreateInput, {nullable:false})
    @Type(() => NaturesCreateInput)
    create!: NaturesCreateInput;

    @Field(() => NaturesUpdateInput, {nullable:false})
    @Type(() => NaturesUpdateInput)
    update!: NaturesUpdateInput;
}
