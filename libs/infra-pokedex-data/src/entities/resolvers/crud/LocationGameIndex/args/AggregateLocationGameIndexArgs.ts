import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LocationGameIndexOrderByWithRelationInput } from "../../../inputs/LocationGameIndexOrderByWithRelationInput";
import { LocationGameIndexWhereInput } from "../../../inputs/LocationGameIndexWhereInput";
import { LocationGameIndexWhereUniqueInput } from "../../../inputs/LocationGameIndexWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateLocationGameIndexArgs {
  @TypeGraphQL.Field(_type => LocationGameIndexWhereInput, {
    nullable: true
  })
  where?: LocationGameIndexWhereInput | undefined;

  @TypeGraphQL.Field(_type => [LocationGameIndexOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: LocationGameIndexOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => LocationGameIndexWhereUniqueInput, {
    nullable: true
  })
  cursor?: LocationGameIndexWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
