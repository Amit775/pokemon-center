import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NaturesCreateManyInput } from './natures-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyNaturesArgs {

    @Field(() => [NaturesCreateManyInput], {nullable:false})
    @Type(() => NaturesCreateManyInput)
    data!: Array<NaturesCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
