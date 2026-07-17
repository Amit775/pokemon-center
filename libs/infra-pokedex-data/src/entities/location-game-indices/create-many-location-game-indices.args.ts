import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LocationGameIndicesCreateManyInput } from './location-game-indices-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyLocationGameIndicesArgs {

    @Field(() => [LocationGameIndicesCreateManyInput], {nullable:false})
    @Type(() => LocationGameIndicesCreateManyInput)
    data!: Array<LocationGameIndicesCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
