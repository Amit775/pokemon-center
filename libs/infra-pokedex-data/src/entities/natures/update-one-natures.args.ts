import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NaturesUpdateInput } from './natures-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { NaturesWhereUniqueInput } from './natures-where-unique.input';

@ArgsType()
export class UpdateOneNaturesArgs {

    @Field(() => NaturesUpdateInput, {nullable:false})
    @Type(() => NaturesUpdateInput)
    data!: NaturesUpdateInput;

    @Field(() => NaturesWhereUniqueInput, {nullable:false})
    @Type(() => NaturesWhereUniqueInput)
    where!: Prisma.AtLeast<NaturesWhereUniqueInput, 'id'>;
}
