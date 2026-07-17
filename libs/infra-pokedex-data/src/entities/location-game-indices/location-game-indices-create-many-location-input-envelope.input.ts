import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LocationGameIndicesCreateManyLocationInput } from './location-game-indices-create-many-location.input';
import { Type } from 'class-transformer';

@InputType()
export class LocationGameIndicesCreateManyLocationInputEnvelope {

    @Field(() => [LocationGameIndicesCreateManyLocationInput], {nullable:false})
    @Type(() => LocationGameIndicesCreateManyLocationInput)
    data!: Array<LocationGameIndicesCreateManyLocationInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
