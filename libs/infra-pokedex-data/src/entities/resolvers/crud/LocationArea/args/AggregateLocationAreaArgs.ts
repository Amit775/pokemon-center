import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LocationAreaOrderByWithRelationInput } from "../../../inputs/LocationAreaOrderByWithRelationInput";
import { LocationAreaWhereInput } from "../../../inputs/LocationAreaWhereInput";
import { LocationAreaWhereUniqueInput } from "../../../inputs/LocationAreaWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateLocationAreaArgs {
  @TypeGraphQL.Field(_type => LocationAreaWhereInput, {
    nullable: true
  })
  where?: LocationAreaWhereInput | undefined;

  @TypeGraphQL.Field(_type => [LocationAreaOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: LocationAreaOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => LocationAreaWhereUniqueInput, {
    nullable: true
  })
  cursor?: LocationAreaWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
