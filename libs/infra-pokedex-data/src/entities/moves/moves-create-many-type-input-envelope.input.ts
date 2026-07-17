import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MovesCreateManyTypeInput } from './moves-create-many-type.input';
import { Type } from 'class-transformer';

@InputType()
export class MovesCreateManyTypeInputEnvelope {

    @Field(() => [MovesCreateManyTypeInput], {nullable:false})
    @Type(() => MovesCreateManyTypeInput)
    data!: Array<MovesCreateManyTypeInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
