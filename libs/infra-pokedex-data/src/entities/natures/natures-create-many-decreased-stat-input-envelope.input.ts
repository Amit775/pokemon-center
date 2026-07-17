import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NaturesCreateManyDecreasedStatInput } from './natures-create-many-decreased-stat.input';
import { Type } from 'class-transformer';

@InputType()
export class NaturesCreateManyDecreasedStatInputEnvelope {

    @Field(() => [NaturesCreateManyDecreasedStatInput], {nullable:false})
    @Type(() => NaturesCreateManyDecreasedStatInput)
    data!: Array<NaturesCreateManyDecreasedStatInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
