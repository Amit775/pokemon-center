import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LocationAreasOrderByWithRelationInput } from "../../../inputs/LocationAreasOrderByWithRelationInput";
import { LocationAreasWhereInput } from "../../../inputs/LocationAreasWhereInput";
import { LocationAreasWhereUniqueInput } from "../../../inputs/LocationAreasWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateLocationAreasArgs {
  @TypeGraphQL.Field(_type => LocationAreasWhereInput, {
    nullable: true
  })
  where?: LocationAreasWhereInput | undefined;

  @TypeGraphQL.Field(_type => [LocationAreasOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: LocationAreasOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => LocationAreasWhereUniqueInput, {
    nullable: true
  })
  cursor?: LocationAreasWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
