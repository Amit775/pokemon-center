import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NaturesCreateManyIncreasedStatInput } from './natures-create-many-increased-stat.input';
import { Type } from 'class-transformer';

@InputType()
export class NaturesCreateManyIncreasedStatInputEnvelope {

    @Field(() => [NaturesCreateManyIncreasedStatInput], {nullable:false})
    @Type(() => NaturesCreateManyIncreasedStatInput)
    data!: Array<NaturesCreateManyIncreasedStatInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
