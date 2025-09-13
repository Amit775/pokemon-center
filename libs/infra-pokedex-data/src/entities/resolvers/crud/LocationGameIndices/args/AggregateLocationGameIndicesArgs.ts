import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LocationGameIndicesOrderByWithRelationInput } from "../../../inputs/LocationGameIndicesOrderByWithRelationInput";
import { LocationGameIndicesWhereInput } from "../../../inputs/LocationGameIndicesWhereInput";
import { LocationGameIndicesWhereUniqueInput } from "../../../inputs/LocationGameIndicesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateLocationGameIndicesArgs {
  @TypeGraphQL.Field(_type => LocationGameIndicesWhereInput, {
    nullable: true
  })
  where?: LocationGameIndicesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [LocationGameIndicesOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: LocationGameIndicesOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => LocationGameIndicesWhereUniqueInput, {
    nullable: true
  })
  cursor?: LocationGameIndicesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
